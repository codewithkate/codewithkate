---
title: "Snowflake Tutorial: Load Data From A Stage Into A Table"
description: ""
category: Snowflake
order: 1
version: 1.0.0
lastModified: 2026-06-09
image: ""
imageAlt: ""
hideCoverImage: false
hideTOC: false
draft: true
featured: false
---
```sql
/*CREATE FILE FORMATE*/
CREATE OR REPLACE FILE FORMAT my_csv_format
  TYPE = CSV
  COMMENT = 'my_file_format';

SELECT * FROM TABLE (
/* Infer schema */
INFER_SCHEMA(
  LOCATION => '{ internalStage | externalStage }'
  , FILE_FORMAT => '<file_format_name>'
  , FILES => ( '<file_name>' [ , '<file_name>' ] [ , ... ] )
  , IGNORE_CASE => TRUE | FALSE
  , MAX_FILE_COUNT => <num>
  , MAX_RECORDS_PER_FILE => <num>
  , KIND => '<kind_name>'
)
)

/* Standard data load */
COPY INTO [<namespace>.]<table_name>
     FROM { internalStage | externalStage | externalLocation }
[ FILES = ( '<file_name>' [ , '<file_name>' ] [ , ... ] ) ]
[ PATTERN = '<regex_pattern>' ]
[ FILE_FORMAT = ( { FORMAT_NAME = '[<namespace>.]<file_format_name>' |
                    TYPE = { CSV | JSON | AVRO | ORC | PARQUET | XML } [ formatTypeOptions ] } ) ]
[ copyOptions ]
[ VALIDATION_MODE = RETURN_<n>_ROWS | RETURN_ERRORS | RETURN_ALL_ERRORS ]

```

