function FindProxyForURL(url, host) {
  host = host.toLowerCase();

  // Route ipchicken via proxy
  if (dnsDomainIs(host, "ipchicken.com") || dnsDomainIs(host, "www.ipchicken.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  // Route whatismyipaddress via proxy
  if (dnsDomainIs(host, "whatismyipaddress.com") || dnsDomainIs(host, "www.whatismyipaddress.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  // Route reddit via proxy
  if (dnsDomainIs(host, "reddit.com") || dnsDomainIs(host, "www.reddit.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  // Route zillow via proxy
  if (dnsDomainIs(host, "zillow.com") || dnsDomainIs(host, "www.zillow.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  // Route realtor via proxy
  if (dnsDomainIs(host, "realtor.com") || dnsDomainIs(host, "www.realtor.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  // Route bizjournals via proxy
  if (dnsDomainIs(host, "bizjournals.com") || dnsDomainIs(host, "www.bizjournals.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  // Route NJ Courts via proxy
  if (dnsDomainIs(host, "njcourts.gov") || dnsDomainIs(host, "www.njcourts.gov")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  // Route tylermecca site via proxy
  if (dnsDomainIs(host, "tylermecca.foxroach.com") || dnsDomainIs(host, "www.tylermecca.foxroach.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  // Bypass proxy for Cloudflare-backed content (avoids captchas and 1020 errors)
  if (isResolvable(host) &&
      (isInNet(dnsResolve(host), "104.16.0.0", "255.240.0.0") ||
       isInNet(dnsResolve(host), "172.64.0.0", "255.192.0.0") ||
       isInNet(dnsResolve(host), "188.114.96.0", "255.255.240.0"))) {
    return "DIRECT";
  }

  // Default rule: everything else goes direct
  return "DIRECT";
}
