function FindProxyForURL(url, host) {
  host = host.toLowerCase();

  // Route ipchicken via proxy
  if (dnsDomainIs(host, "ipchicken.com") || dnsDomainIs(host, "www.ipchicken.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  // Force whatismyipaddress direct
  if (dnsDomainIs(host, "whatismyipaddress.com") || dnsDomainIs(host, "www.whatismyipaddress.com")) {
    return "DIRECT";
  }

  return "DIRECT";
}