---
title: Uplink CLI
slug: api-reference/uplink-cli
createdAt: 2022-08-02T16:14:49.000Z
updatedAt: 2023-03-22T13:19:00.000Z
---

## Introduction

An application that allows you to access Object Storage from the command line.  Use this tool to upload and manage objects and buckets.

{% callout type="info"  %} 
To setup `uplink` see [](docId\:TbMdOGCAXNWyPpQmH6EOq).
{% /callout %}

The `uplink` command can take the following child commands:

| Command                          | Description                                                      |
| :------------------------------- | :--------------------------------------------------------------- |
| [](docId\:ObsfiEHKpVU7JTdGtW-3t) | set of commands to manage access grants                          |
| [](docId\:N20xcpVOuPQIEcaA44wZu) | import a serialized access grant into the configuration          |
| [](docId\:yk6xM8Jj_C-blgyjh4K61) | copy a file from outside of Storj bucket to inside or vice versa |
| [](docId\:Df-CVmCCHmt6r3_c1PLn4) | list objects and prefixes or all buckets                         |
| [](docId\:F77kaGpjXx7w-JYv2rkhf) | make a new bucket                                                |
| [](docId\:kyMG3B16kKc3gpCxRNe1K) | metadata related commands                                        |
| [](docId\:PIfV271UghKvJecT-zQ4d) | moves a Storj object to another location in Storj DCS            |
| [](docId\:Wo5-shT0hZDNMeyM1kA12) | remove a bucket                                                  |
| [](docId\:eavv_906IH-39ylIXq30d) | remove a file from a Storj bucket                                |
| [](docId\:OuoKJl9KqbJVQB9Xkdy3g) | create an uplink config file                                     |
| [](docId\:tBnCSrmR1jbOewG38fIr4) | shares restricted access to objects                              |

## Flags

| Flag                  | Description                                     |
| :-------------------- | :------------------------------------------docId: TC-N6QQVQg8w2cRqvEqEf
---- |
| `--advanced`          | if used in with `-h`, print advanced flags help |
| `--config-dir string` | main directory for uplink configuration         |
