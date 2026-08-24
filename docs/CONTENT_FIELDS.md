# Content fields

## Shared record controls

| Field | Type | Meaning |
|---|---|---|
| `id` | string | Permanent unique identifier using lowercase kebab-case. |
| `visible` | boolean | Whether a published record may appear publicly. |
| `featured` | boolean | Whether a visible published record may appear on Home. |
| `status` | `published`, `draft`, `archived` | Record publication state. |

A featured record must also be visible and published.

## Derived statistics

Home statistics are not content fields. Their values are calculated from visible published records by `src/content/statistics.ts`. Labels explicitly use “listed” to describe dataset record counts rather than outcomes, influence or impact.

## Home presentation settings

`publicationPreview` controls whether Home uses explicitly featured publications or the latest visible publications. `previewLimits` controls only how many preview cards are rendered in each Home section. These settings never alter dataset counts or derived statistics.

`hero.portraitNote.title` and `hero.portraitNote.description` control the content card attached to the Home portrait. Both are managed copy; the card renders only when at least one field is approved.

## Managed copy

| Field | Type | Meaning |
|---|---|---|
| `text` | string | The proposed or approved wording. |
| `status` | `approved`, `draft`, `archived` | Only approved wording renders. |

## Publications CSV

Keep records ordered from oldest to newest and append new publications at the end. Display order is independent of file order: the website sorts published records by year descending, then title ascending.

| Field | Required | Notes |
|---|---:|---|
| `id` | yes | Unique and permanent. |
| `type` | yes | `journal`, `book`, `chapter`, or `conference`. |
| `year` | yes | Four-digit year. |
| `title` | yes | Explicit title; never inferred at runtime. |
| `citation` | yes | Full source citation. |
| `url` | no | DOI or official source URL. |
| `featured` | yes | `true` or `false`. |
| `visible` | yes | `true` or `false`. |
| `status` | yes | Publication state. |
| `editoriallyVerified` | yes | Whether structured fields were manually checked. |

## News CSV

Required fields are `id`, `date`, `displayDate`, `title`, `url`, `featured`, `visible`, and `status`. `date` must use `YYYY-MM-DD`.

## Events CSV

Fields are `id`, `date`, `displayDate`, `title`, `scope`, `url`, `featured`, `visible`, and `status`. `scope` is `domestic` or `international`. Historical records may leave `date` blank until verified.

## Assets

Content asset paths must begin with `/uploads/`. File and folder names must be lowercase, contain no spaces and use only letters, numbers, hyphens, periods and slashes.
