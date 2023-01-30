{ pkgs }: {
  deps = [
    pkgs.systemd
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}