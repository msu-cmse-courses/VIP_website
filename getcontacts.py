#!/usr/bin/env python3
"""Build a contact list of project advisors from markdown front matter.

Usage:
    python getcontacts.py output.csv
    python getcontacts.py output.csv --projects-dir _projects
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path
from typing import Any

import pandas as pd
import yaml


TITLE_PREFIX_RE = re.compile(
    r"^(dr|prof|professor|mr|mrs|ms|mx)\.?\s+", re.IGNORECASE
)


def split_name(full_name: str) -> tuple[str, str]:
    """Split a full name into first and last name using a simple heuristic."""
    if not full_name:
        return "", ""

    cleaned = TITLE_PREFIX_RE.sub("", full_name.strip())
    parts = cleaned.split()
    if not parts:
        return "", ""
    if len(parts) == 1:
        return parts[0], ""
    return " ".join(parts[:-1]), parts[-1]


def read_front_matter(markdown_path: Path) -> dict[str, Any]:
    """Read YAML front matter from a markdown file."""
    text = markdown_path.read_text(encoding="utf-8")
    if not text.startswith("---"):
        return {}

    parts = text.split("---", 2)
    if len(parts) < 3:
        return {}

    front_matter = parts[1].strip()
    if not front_matter:
        return {}

    data = yaml.safe_load(front_matter)
    return data if isinstance(data, dict) else {}


def build_instructor_dataframe(projects_dir: str = "_projects") -> pd.DataFrame:
    """Parse project markdown files and return advisor contacts as a DataFrame."""
    records: list[dict[str, str]] = []
    base = Path(projects_dir)

    for md_file in sorted(base.glob("*.md")):
        front_matter = read_front_matter(md_file)
        project_name = str(front_matter.get("title") or md_file.stem)
        advisors = front_matter.get("advisors") or []

        if not isinstance(advisors, list):
            continue

        for advisor in advisors:
            if not isinstance(advisor, dict):
                continue

            full_name = str(advisor.get("name") or "").strip()
            first_name, last_name = split_name(full_name)
            records.append(
                {
                    "project_name": project_name,
                    "full_name": full_name,
                    "first_name": first_name,
                    "last_name": last_name,
                    "email": str(advisor.get("email") or "").strip(),
                    "bio": str(advisor.get("bio") or "").strip(),
                    "image_path": str(advisor.get("img") or "").strip(),
                    "source_file": md_file.name,
                }
            )

    return pd.DataFrame(records)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Export project advisor contacts from markdown files to CSV."
    )
    parser.add_argument(
        "output_csv",
        help="Output CSV filename (example: contacts.csv)",
    )
    parser.add_argument(
        "--projects-dir",
        default="_projects",
        help="Folder containing project markdown files (default: _projects)",
    )
    args = parser.parse_args()

    df = build_instructor_dataframe(args.projects_dir)
    df.to_csv(args.output_csv, index=False)
    print(f"Wrote {len(df)} records to {args.output_csv}")


if __name__ == "__main__":
    main()
