function FindProxyForURL(url, host) {
  host = host.toLowerCase();

  // Route ipchicken via proxy
  if (dnsDomainIs(host, "ipchicken.com") || dnsDomainIs(host, "www.ipchicken.com")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  // if URL contains our magic flag, force proxy regardless of host
  if (shExpMatch(url, "*__via_proxy__=*")) {
    return "SOCKS5 127.0.0.1:1080";
  }

  return "DIRECT";

}
