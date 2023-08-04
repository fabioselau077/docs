---
title: Download Uplink CLI
docId: hFL-goCWqrQMJPcTN82NB
redirects:
  - /dcs/downloads/download-uplink-cli
---

The native CLI tool for Storj DCS/OSP

First, [](docId:HeEf9wiMdlQx9ZdS_-oZS).&#x20;

**Install** the binary for your OS:

{% tabs %}
{% tab label="Windows" %}
Download the [Windows Uplink Binary](https://github.com/storj/storj/releases/latest/download/uplink_windows_amd64.zip) zip file

In the Downloads folder, right-click and select "Extract all"

![](https://archbee-image-uploads.s3.amazonaws.com/kv3plx2xmXcUGcVl4Lttj/3pxVa-qpfcR1iuwSu-osg_win-01.png)

Extract to your user's folder ("**Alexey"** in this example):

![](https://archbee-image-uploads.s3.amazonaws.com/kv3plx2xmXcUGcVl4Lttj/5VOWlcnwm4uurnq7IqooH_win-02.png)

Once extracted, do not try to open the file, as it can only be accessed via command line.

Open **Windows PowerShell** and continue on to the next step.
{% /tab %}

{% tab label="Linux" %}
AMD64

Curl Download

```Text
curl -L https://github.com/storj/storj/releases/latest/download/uplink_linux_amd64.zip -o uplink_linux_amd64.zip
unzip -o uplink_linux_amd64.zip
sudo install uplink /usr/local/bin/uplink
```

Direct Download

[Linux AMD64 Uplink Binary](https://github.com/storj/storj/releases/latest/download/uplink_linux_amd64.zip)

ARM

Curl Download

```Text
curl -L https://github.com/storj/storj/releases/latest/download/uplink_linux_arm.zip -o uplink_linux_arm.zip
unzip -o uplink_linux_arm.zip
sudo install uplink /usr/local/bin/uplink
```

Direct Download

[Linux ARM Uplink Binary](https://github.com/storj/storj/releases/latest/download/uplink_linux_arm.zip)

ARM64

Curl Download

```Text
curl -L https://github.com/storj/storj/releases/latest/download/uplink_linux_arm64.zip -o uplink_linux_arm64.zip
unzip -o uplink_linux_arm64.zip
sudo install uplink /usr/local/bin/uplink
```

Direct Download

[Linux ARM64 Uplink Binary](https://github.com/storj/storj/releases/latest/download/uplink_linux_arm64.zip)
{% /tab %}

{% tab label="macOS" %}
Curl Download

```Text
curl -L https://github.com/storj/storj/releases/latest/download/uplink_darwin_amd64.zip -o uplink_darwin_amd64.zip
unzip -o uplink_darwin_amd64.zip
sudo install uplink /usr/local/bin/uplink
```

Direct Download

[macOS Uplink Binary](https://github.com/storj/storj/releases/latest/download/uplink_darwin_amd64.zip)

{% /tab %}
{% /tabs %}

Then, check [](docId:TbMdOGCAXNWyPpQmH6EOq)&#x20;