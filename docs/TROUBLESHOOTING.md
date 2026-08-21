# Troubleshooting content updates

## JSON validation failed

Check commas, quotation marks and brackets. GitHub's editor highlights many syntax errors. Compare the file with its template before changing key names.

## CSV column is missing

Restore the exact header from the matching template. Do not rename or reorder fields when editing in spreadsheet software.

## Duplicate ID

Give the new record a unique permanent ID. Do not change IDs of existing published records.

## Featured but hidden error

Set `featured=false`, or set both `visible=true` and `status=published` after approval.

## Invalid URL or date

URLs must be complete `https://` addresses. Dates must use `YYYY-MM-DD`.

## Asset does not exist

Upload the referenced file under `public/uploads/` and confirm that capitalization exactly matches the JSON path.

## Text is saved but not visible

Managed copy with `status=draft` is intentionally hidden. Change it to `approved` only after explicit content approval.

## Merged content is not visible

Confirm the workflow passed, the record is visible and published, and the browser is not showing a cached version. For images and PDFs, keep the same path and perform a hard refresh.

## Rollback

Open the content commit in GitHub and use **Revert**, or restore the previous version of the affected file in a new pull request.
