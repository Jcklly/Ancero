function FindProxyForURL(url, host) {
  host = host.toLowerCase();

  // ---- Sites that must use the proxy ----
  if (dnsDomainIs(host, "ipchicken.com") || shExpMatch(host, "*.ipchicken.com")) {
    return "SOCKS5 127.0.0.1:1080; DIRECT";
  }

  if (dnsDomainIs(host, "whatismyipaddress.com") || shExpMatch(host, "*.whatismyipaddress.com")) {
    return "SOCKS5 127.0.0.1:1080; DIRECT";
  }

  if (dnsDomainIs(host, "reddit.com") || shExpMatch(host, "*.reddit.com")) {
    return "SOCKS5 127.0.0.1:1080; DIRECT";
  }

  if (dnsDomainIs(host, "zillow.com") || shExpMatch(host, "*.zillow.com")) {
    return "SOCKS5 127.0.0.1:1080; DIRECT";
  }

  if (dnsDomainIs(host, "realtor.com") || shExpMatch(host, "*.realtor.com")) {
    return "SOCKS5 127.0.0.1:1080; DIRECT";
  }

  if (dnsDomainIs(host, "bizjournals.com") || shExpMatch(host, "*.bizjournals.com")) {
    return "SOCKS5 127.0.0.1:1080; DIRECT";
  }

  if (dnsDomainIs(host, "njcourts.gov") || shExpMatch(host, "*.njcourts.gov")) {
    return "SOCKS5 127.0.0.1:1080; DIRECT";
  }

  if (dnsDomainIs(host, "portal-cloud.njcourts.gov") || shExpMatch(host, "*.portal-cloud.njcourts.gov")) {
    return "SOCKS5 127.0.0.1:1080; DIRECT";
  }

  if (dnsDomainIs(host, "dnb.com") || shExpMatch(host, "*.dnb.com")) {
    return "SOCKS5 127.0.0.1:1080; DIRECT";
  }

  if (dnsDomainIs(host, "tylermecca.foxroach.com") || shExpMatch(host, "*.tylermecca.foxroach.com")) {
    return "SOCKS5 127.0.0.1:1080; DIRECT";
  }

  if (dnsDomainIs(host, "cloudflare.com") || shExpMatch(host, "*.cloudflare.com")) {
    return "SOCKS5 127.0.0.1:1080; DIRECT";
  }

  // ---- Cloudflare detection helper (official IPv4 ranges) ----
  function isCloudflareIP(h) {
    if (!isResolvable(h)) return false;
    var ip = dnsResolve(h);
    return (
      isInNet(ip, "173.245.48.0",  "255.255.240.0")  || // /20
      isInNet(ip, "103.21.244.0",  "255.255.252.0")  || // /22
      isInNet(ip, "103.22.200.0",  "255.255.252.0")  || // /22
      isInNet(ip, "103.31.4.0",    "255.255.252.0")  || // /22
      isInNet(ip, "141.101.64.0",  "255.255.192.0")  || // /18
      isInNet(ip, "108.162.192.0", "255.255.192.0")  || // /18
      isInNet(ip, "190.93.240.0",  "255.255.240.0")  || // /20
      isInNet(ip, "188.114.96.0",  "255.255.240.0")  || // /20
      isInNet(ip, "197.234.240.0", "255.255.252.0")  || // /22
      isInNet(ip, "198.41.128.0",  "255.255.128.0")  || // /17
      isInNet(ip, "162.158.0.0",   "255.254.0.0")    || // /15
      isInNet(ip, "104.16.0.0",    "255.248.0.0")    || // /13
      isInNet(ip, "104.24.0.0",    "255.252.0.0")    || // /14
      isInNet(ip, "172.64.0.0",    "255.248.0.0")    || // /13
      isInNet(ip, "131.0.72.0",    "255.255.252.0")     // /22
    );
  }

  // ---- For Cloudflare-backed hosts: try proxy first, then direct ----
  if (isCloudflareIP(host)) {
    return "SOCKS5 127.0.0.1:1080; DIRECT";
  }

  // ---- Default: everything else direct ----
  return "DIRECT";
}



