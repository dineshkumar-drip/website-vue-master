namespace :npm do
  task :release do
    on release_roles :all do
      execute :cp, release_path.join('package.json'), shared_path.join('package.json')
    end
  end

  desc <<-DESC
        Install the project dependencies via npm. By default, devDependencies \
        will not be installed. The install command is executed \
        with the --production, --silent and --no-spin flags.
        You can override any of these defaults by setting the variables shown below.
          set :npm_target_path, nil
          set :npm_flags, '--production --silent --no-spin'
          set :npm_roles, :all
          set :npm_env_variables, {}
  DESC
  task :install do
    on roles fetch(:npm_roles) do
      within shared_path do
        with fetch(:npm_env_variables, {}) do
          # execute :npm, 'rebuild', 'node-sass', '--force'
          execute :npm, fetch(:npm_flags), 'install', '.'
        end
      end
    end
  end

  desc 'Build '
  task :build do
    on roles fetch(:npm_roles) do
      within release_path do
        execute :cp, '-r', shared_path.join('node_modules'), release_path
        execute :npm, 'run', 'generate'
      end
    end
  end

  desc 'Copy Dist '
  task :copy_dist do
    on roles fetch(:npm_roles) do
      within release_path do
        upload! "#{Dir.pwd}/../dist.zip", release_path
        execute :unzip, 'dist.zip'
        execute :rm, 'dist.zip'
      end
    end
  end

  desc 'Rebuild '
  task :rebuild do
    on roles fetch(:npm_roles) do
      within release_path do
        execute :npm, 'rebuild', 'node-sass', '--force'
      end
    end
  end

  # after 'deploy:updated', 'npm:release'
  # after 'npm:release', 'npm:install'
  # after 'npm:install', 'npm:build'

  after 'deploy:updated', 'npm:copy_dist'
end

namespace :load do
  task :defaults do
    set :npm_flags, %w(--silent --no-spin)
    set :npm_prune_flags, '--production'
    set :npm_roles, :all
  end
end
