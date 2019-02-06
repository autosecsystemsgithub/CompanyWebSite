module.exports = {
  apps : [{
    name: 'autosecBE',
    script: 'emailer-imap.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G'
  }],

  deploy : {
  }
};{
    name: 'autosecFE',
    script: 'node_modules/@angular/cli/bin/ng',
    args: 'serve',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  },