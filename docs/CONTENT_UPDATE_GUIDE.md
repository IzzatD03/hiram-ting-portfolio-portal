# Content update guide

The website uses files in `content/` as its single source of truth. Routine updates do not require changes to React or Next.js files.

## Safe workflow

1. Create a branch named `content/update-YYYY-MM` in GitHub.
2. Edit a JSON file, replace a CSV file, or upload an asset under `public/uploads/`.
3. Open a pull request to `main`.
4. Wait for **Validate and Build Website** to pass.
5. Review the preview or changed files, then merge.

If a check fails, the currently deployed website is unaffected. Correct the file in the same branch and wait for the checks to run again.

## Approval rule for editable sentences

Long-form or editorial copy uses this structure:

```json
{
  "text": "Text to review",
  "status": "draft"
}
```

- `draft`: stored for review and never rendered publicly.
- `approved`: rendered publicly.
- `archived`: retained but not rendered.

Do not change a sentence to `approved` until the wording has been explicitly confirmed.

## Common updates

### Home statistics

Statistics cannot be entered or edited manually. They are calculated from records that are both `visible=true` and `status=published`:

- research programmes from `content/research.json`;
- publications from `content/publications.csv`;
- academic appointments from `content/affiliations.json`;
- projects from `content/projects.json`;
- events from `content/events.csv`;
- media records from `content/news.csv`.

To change a count, correct the underlying records and their publication state.

### Biography or positioning

Edit `content/profile.json`. Keep new wording as `draft` until approved.

### Publication

Edit `content/publications.csv` without changing the column names. Records are kept from oldest to newest so new publications can be appended at the end; the website sorts published records from newest to oldest at runtime. Use a unique permanent `id`, an explicit `year` and `title`, and save as UTF-8 CSV. Runtime code never derives title or year from the citation.

### Project

Edit `content/projects.json`. Project summaries are managed copy and must be `approved` to appear.

### News or event

Edit `content/news.csv` or `content/events.csv`. Dates must use `YYYY-MM-DD` when supplied.

### Team

Edit `content/team.json`. The route is unavailable while `enabled` is `false`. A member must be `visible=true` and `status=published` to render.

### Portrait or CV

Replace the file at the existing path:

- `public/uploads/profile/hiram-ting-main.png`
- `public/uploads/documents/hiram-ting-cv.pdf`

Keeping the path unchanged avoids code or content edits.

## Hide and restore

Set `visible` to `false` before deleting a record. Git history is the backup and rollback mechanism. To roll back, revert the content commit or restore the prior file version through GitHub.

## Supported maintenance scope

Routine content maintenance covers values and records within the existing files and fields. New page structures, content types, schema changes, UI redesigns and new functionality are engineering changes rather than routine content updates.
