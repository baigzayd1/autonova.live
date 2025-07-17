{ pkgs }: {
  deps = [
    pkgs.nodejs_20
    pkgs.nodePackages.npm
    pkgs.postgresql_16
    pkgs.openssl
    pkgs.git
    pkgs.curl
    pkgs.wget
  ];
  env = {
    # Node.js environment configuration
    NODE_ENV = "production";
    NPM_CONFIG_PREFIX = "/home/runner/.npm-global";
    PATH = "/home/runner/.npm-global/bin:$PATH";
    
    # PostgreSQL configuration
    PGUSER = "postgres";
    PGHOST = "localhost";
    PGPORT = "5432";
    
    # SSL configuration for Node.js
    NODE_TLS_REJECT_UNAUTHORIZED = "0";
    
    # Replit specific
    REPL_ID = "$REPL_ID";
    REPL_SLUG = "$REPL_SLUG";
    REPL_OWNER = "$REPL_OWNER";
  };
}