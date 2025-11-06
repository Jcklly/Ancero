function FindProxyForURL(url, host) {
  host = host.toLowerCase();

  // Route ipchicken via proxy
  if (dnsDomainIs(host, "ipchicken.com") || dnsDomainIs(host, "www.ipchicken.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  // if URL contains our magic flag, force proxy regardless of host
  if (dnsDomainIs(host, "whatismyipaddress.com") || dnsDomainIs(host, "www.whatismyipaddress.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  if (dnsDomainIs(host, "reddit.com") || dnsDomainIs(host, "www.reddit.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  if (dnsDomainIs(host, "zillow.com") || dnsDomainIs(host, "www.zillow.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  if (dnsDomainIs(host, "realtor.com") || dnsDomainIs(host, "www.realtor.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  if (dnsDomainIs(host, "bizjournals.com") || dnsDomainIs(host, "www.bizjournals.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  if (dnsDomainIs(host, "njcourts.gov") || dnsDomainIs(host, "www.njcourts.gov")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  if (dnsDomainIs(host, "tylermecca.foxroach.com") || dnsDomainIs(host, "www.tylermecca.foxroach.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  return "DIRECT";

}




