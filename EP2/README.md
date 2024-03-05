# - What is `NPM`

NPM stands for Node Package Manager. It's a package manager for JavaScript programming language and primarily used for managing dependencies in Node.js projects. With NPM, developers can easily install, share, and manage packages and libraries needed for their projects. It's widely used in the JavaScript community for both front-end and back-end development.

# - What is `Parcel/Webpack`? Why do we need it?

Parcel and Webpack are both module bundlers for JavaScript applications. They are tools that take multiple JavaScript files and their dependencies, along with other assets like CSS, images, etc., and bundle them together into a single output file (or multiple files) that can be efficiently served to the browser.

Here's a brief overview of each:

Parcel: Parcel is a zero-configuration bundler. It aims to simplify the setup process for developers by automatically detecting and configuring the required tools for a project. It supports many file types out of the box and provides features like hot module replacement (HMR) for fast development workflows.

Webpack: Webpack is a highly configurable bundler that offers a lot of flexibility and control over the bundling process. It allows developers to define custom configurations to handle various scenarios and optimize the output bundle for performance. Webpack is widely used in complex projects where fine-grained control over the bundling process is necessary.

Both Parcel and Webpack are essential tools for modern JavaScript development because:

Dependency Management: They allow developers to manage dependencies efficiently by bundling all required modules into a single file or a set of files.

Optimization: They optimize the output bundles by removing dead code, minifying files, and applying other optimizations to improve performance.

Module Loading: They enable the usage of modern JavaScript modules (ES modules, CommonJS, AMD, etc.) in the browser by handling module loading and resolving dependencies.

In summary, Parcel and Webpack are essential for simplifying and optimizing the development workflow in JavaScript projects, making it easier to manage dependencies, improve performance, and support modern JavaScript features.

# What is `.parcel-cache`

The .parcel-cache directory is a directory automatically generated by the Parcel bundler during the bundling process. It is used to store cached data and intermediate build artifacts to improve build performance.

When you run Parcel to bundle your project, it analyzes your project's dependencies, processes files, and generates the final output bundle. During this process, Parcel may cache certain data to avoid reprocessing files unnecessarily, especially when running subsequent builds with minimal changes.

The .parcel-cache directory typically contains various cached data related to your project, such as compiled JavaScript files, processed assets, dependency information, and other build-related data.

It's generally safe to ignore the .parcel-cache directory in version control systems like Git, as it can be regenerated by Parcel as needed during the build process.

# - What is `npx` ?

npx is a command-line tool that comes with npm (Node Package Manager) version 5.2.0 and higher. It allows you to execute npm package binaries directly, without having to install them globally or locally beforehand.

Here's how it works:

Execute Binaries: With npx, you can run executables that are included in npm packages. Instead of having to install the package globally or locally and then call the binary from the command line, npx fetches the package if necessary, runs the executable, and then cleans up after itself.

Execute Without Installation: If you need to use a tool or script just once or infrequently, you can use npx to run it without having to worry about installing it beforehand. This is particularly useful for trying out new tools or running one-off scripts without cluttering your global or project dependencies.

Version Management: npx helps with version management by ensuring that the package being executed is the latest version available. If the required package isn't installed locally, npx downloads it temporarily, executes the command with that version, and then removes it after the command finishes.

For example, if you want to run a package named some-package that you haven't installed locally or globally, you can simply use npx some-package to execute it. npx will handle the installation and execution process transparently.

Overall, npx simplifies the usage of npm package binaries, making it easier to manage dependencies and run commands without worrying about installation and versioning.

# - What is difference between `dependencies` vs `devDependencies`

In npm (Node Package Manager), there are two types of dependencies: dependencies and devDependencies. They serve different purposes and are used in different contexts within a Node.js project.

## Dependencies

Dependencies listed in the dependencies object in your package.json file are packages that your project needs to run in production. These are the packages that are required for your application to function properly when it's deployed or used by end-users.
For example, if your application relies on a library like Express for handling HTTP requests, you would list Express as a dependency.
Dependencies installed via npm install --save or npm install --save <package> are added to the dependencies object in your package.json file.
DevDependencies:

## DevDependencies

on the other hand, are packages that are only needed during development or testing. They are not required for the production deployment of your application.
These dependencies typically include testing frameworks, build tools, and other development-related utilities.
Examples of devDependencies include testing libraries like Mocha, build tools like Webpack or Gulp, and code quality tools like ESLint.
DevDependencies are listed in the devDependencies object in your package.json file.
Dependencies installed via npm install --save-dev or npm install --save-dev <package> are added to the devDependencies object in your package.json file.
In summary, dependencies are necessary for the application to run in production, while devDependencies are only needed during development or testing. Separating them helps keep your production deployments lean by excluding development-only dependencies.

# What is Tree Shaking?

Tree shaking is a term commonly used in the context of JavaScript module bundlers, such as Webpack or Rollup. It refers to the process of eliminating dead code (i.e., code that is not used) from the final bundle.

Here's how it works:

Static Analysis: Tree shaking tools analyze the static structure of your code to determine which modules and variables are imported and used.

Unused Code Removal: Any code that is not explicitly imported or used by your application is considered dead code. Tree shaking tools identify and remove this dead code during the bundling process.

Optimization: By eliminating dead code, tree shaking reduces the size of the final bundle. This results in smaller bundle sizes, faster loading times, and improved application performance.

Tree shaking is particularly beneficial in modern JavaScript applications where developers use module-based development, especially with ES6 module syntax. It allows developers to import only the specific functions, classes, or variables they need from a module, rather than importing the entire module. This selective importing helps reduce bundle sizes and improve overall application performance.

However, it's important to note that tree shaking relies on static analysis of the code, which means that it may not always be able to eliminate all dead code, especially if the code includes dynamic imports or other complex runtime behaviors. Additionally, tree shaking is typically more effective with pure ES6 modules rather than CommonJS modules, due to the static nature of ES6 module syntax.

## What is Hot Module Replacement?

Hot Module Replacement (HMR) is a feature in module bundlers like Webpack and Parcel that allows developers to update modules in an application without requiring a full page reload.

Here's how it works:

Module Replacement: When a developer makes changes to a module in their codebase, instead of reloading the entire application, the module bundler only updates the modified modules.

Fast Updates: HMR applies the changes to the running application in real-time, which means developers can see the effects of their changes almost instantly without losing the current state of the application.

Preserved State: HMR preserves the application's state during module updates. This means that any state or data that was already loaded or modified in the application remains intact, providing a seamless development experience.

Retaining Stateful Modules: HMR can also update modules that are in a "hot" state, meaning they retain their current state across updates. This is particularly useful for preserving things like component state in React applications or maintaining the state of a running server in Node.js applications.

HMR is a powerful tool for improving the developer experience during the development process. It speeds up the feedback loop, allowing developers to iterate more quickly and efficiently, without the need for manual page reloads or losing the current application state.

## - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words

Sure, here are my favorite 5 superpowers of Parcel:

Zero Configuration: Parcel requires little to no configuration to get started. It automatically detects and configures settings for various file types, making it extremely easy to set up and use.

Blazing Fast Bundling: Parcel utilizes a highly optimized bundling algorithm that parallelizes and optimizes the bundling process, resulting in lightning-fast build times even for large projects.

Built-in Asset Support: Parcel supports a wide range of file types out of the box, including JavaScript, CSS, HTML, images, fonts, and more. It handles asset loading and optimization seamlessly, simplifying the development workflow.

Hot Module Replacement (HMR): Parcel comes with built-in support for HMR, allowing developers to see their changes reflected in the browser almost instantly without needing to manually reload the page.

Automatic Code Splitting: Parcel automatically analyzes the project's dependencies and splits the output bundle into smaller chunks, optimizing the loading performance by only loading the necessary code for each page or component.

Now, let's describe three of them:

Zero Configuration: Parcel's zero configuration setup means you can start working on your project without spending time tweaking build settings. This is particularly beneficial for beginners or small projects where setting up a complex build system can be daunting. Parcel's ability to automatically detect and configure settings based on the project's structure and file types saves developers valuable time and effort.

Blazing Fast Bundling: Parcel's bundling process is exceptionally fast, thanks to its optimized algorithm and parallelization techniques. This speed is crucial for maintaining a productive development workflow, especially in large projects where frequent code changes occur. With Parcel, developers can build their projects quickly, reducing waiting time and allowing them to focus more on coding and less on waiting for builds to complete.

Built-in Asset Support: Parcel's built-in support for various file types simplifies asset management in projects. Whether it's JavaScript, CSS, HTML, images, or fonts, Parcel handles them seamlessly without the need for additional configuration or plugins. This streamlined asset handling reduces the complexity of the build process and makes it easier for developers to work with different types of files within their projects.

## What is `.gitignore`? What should we add and not add into it?

The .gitignore file is a text file used by Git to specify files and directories that should be ignored by version control. When you add files or directories to .gitignore, Git will not track changes to them or include them in commits, which can help keep your repository clean and focused on the important files.

Here's what you should typically include and not include in a .gitignore file:

## What to Include (Files/Directories to Ignore)

Dependency Directories: Directories containing dependencies installed by package managers (e.g., node_modules for npm, vendor for Composer) should be ignored. These directories contain a large number of files and can bloat your repository unnecessarily.

Build Artifacts: Files generated during the build process, such as compiled code, bundled assets, and temporary files, should be ignored. These files are usually generated from the source code and can be easily regenerated if needed.

IDE/Editor Files: Files and directories related to IDEs (Integrated Development Environments) or text editors, such as configuration files, project files, and editor-specific directories (e.g., .vscode, .idea), should be ignored. These files are often specific to individual developers and can cause conflicts when collaborating on a project.

Local Configuration Files: Configuration files that contain environment-specific settings or secrets, such as .env files or database configuration files with sensitive information, should be ignored. These files may vary between development, staging, and production environments and should not be committed to the repository.

Logs and Temporary Files: Logs generated by the application, as well as temporary files and caches, should be ignored. These files are usually transient and can clutter the repository if tracked.

## What Not to Include

Source Code: Source code files (e.g., JavaScript, CSS, HTML, etc.) should not be included in .gitignore. These are the files that you want Git to track and version control.

Important Configuration Files: Configuration files that are necessary for the application to run or build, but do not contain sensitive information, should not be ignored. Examples include package.json, webpack.config.js, and other project configuration files.

Documentation and Assets: Files and directories containing documentation, images, fonts, and other non-sensitive assets should not be ignored. These files are often part of the project and may need to be versioned alongside the source code.

By properly configuring .gitignore, you can ensure that your repository only includes relevant files while keeping unnecessary files and directories out of version control. This helps improve repository cleanliness, reduce repository size, and avoid cluttering the project history with irrelevant changes.

## What is the difference between `package.json` and `package-lock.json

package.json and package-lock.json are both files used in Node.js projects to manage dependencies, but they serve different purposes and have different formats.

package.json:

Purpose: package.json is a metadata file for the project that contains various information about the project, including its name, version, description, entry points, scripts, and most importantly, its dependencies.

Dependency Listing: It includes a list of dependencies required by the project, along with their version numbers and optional metadata. Dependencies listed in package.json can be of two types: regular dependencies (listed under the "dependencies" field) and development dependencies (listed under the "devDependencies" field).

Manual Management: Developers can manually add or remove dependencies in package.json. When a new dependency is added using npm or yarn, it's typically listed here along with its version number.

package-lock.json:

Purpose: package-lock.json is automatically generated by npm or yarn to provide a detailed, deterministic dependency tree for the project. It ensures that subsequent installations of dependencies are identical, regardless of the environment or machine.

Dependency Resolution: It includes an exact dependency tree, with each dependency version resolved to a specific version. This prevents unexpected or inconsistent dependency versions between installations.

Lockfile: package-lock.json acts as a lockfile, ensuring that dependencies are installed exactly as specified, without any changes or updates, unless explicitly requested by the developer.

In summary, package.json is a metadata file that lists project information and dependencies, while package-lock.json is a lockfile that provides a detailed and deterministic dependency tree to ensure consistent installations across different environments. While package.json is manually maintained and edited by developers, package-lock.json is automatically generated and updated by npm or yarn.

## - Why should I not modify `package-lock.json`?

Modifying package-lock.json directly is generally not recommended for several reasons:

Deterministic Dependency Resolution: package-lock.json is intended to provide a deterministic and consistent dependency tree for your project. It ensures that every developer working on the project installs the exact same versions of dependencies, regardless of their environment or machine. Modifying package-lock.json can lead to inconsistencies in dependency versions between installations, potentially causing compatibility issues or unexpected behavior.

Automatic Generation: package-lock.json is automatically generated and updated by npm or yarn based on the dependencies listed in package.json and the dependency tree installed in your project. Manually modifying package-lock.json goes against the intended workflow of dependency management in Node.js projects and can lead to conflicts between the manually specified versions and the ones automatically resolved by npm or yarn.

Maintenance Overhead: Manually managing package-lock.json can introduce additional maintenance overhead, as you would need to keep track of changes to dependencies and their versions manually. This can become cumbersome, especially in projects with many dependencies or frequent updates.

Version Control Issues: Modifying package-lock.json directly can also cause issues with version control systems like Git. Since package-lock.json contains specific version information for dependencies, manual modifications can lead to unnecessary changes in the file, resulting in noisy commits and potential conflicts during collaboration.

Instead of modifying package-lock.json directly, it's best to let npm or yarn handle dependency resolution and management automatically. If you need to update or change dependencies, you should do so by editing package.json and then running npm install or yarn install to regenerate package-lock.json based on the updated dependency tree. This ensures that your project maintains consistency and stability in its dependency management process.

## What is `node_modules` ? Is it a good idea to push that on git?

node_modules is a directory created by npm (Node Package Manager) or yarn when you install dependencies for a Node.js project. It contains all the packages and their dependencies that your project depends on. Each package is typically installed as a separate directory within node_modules.

It's generally not considered a good idea to push the node_modules directory to Git for several reasons:

Large Size: The node_modules directory can be quite large, especially for projects with many dependencies. Including it in your Git repository can significantly increase the size of your repository, making cloning and fetching slower for collaborators.

Redundancy: The contents of node_modules can be easily regenerated by running npm install or yarn install based on the dependencies listed in package.json. Including node_modules in your Git repository is redundant since it duplicates the dependency information already present in package.json.

Version Control Issues: Managing node_modules in version control can lead to version control issues, such as conflicts and merge problems, especially in collaborative environments where different developers may be using different operating systems or npm/yarn versions. These issues can arise due to differences in file paths, symbolic links, and package versions.

Security Concerns: Including node_modules in version control can potentially expose sensitive information or introduce security risks, such as inadvertently committing credentials or sensitive files included in dependencies.

Instead of pushing node_modules to Git, it's recommended to include a .gitignore file in your project that specifies node_modules to be ignored by Git. This ensures that node_modules is not included in your Git repository, and each developer can install dependencies locally using npm install or yarn install to set up their development environment. This approach keeps your repository lean, avoids version control issues, and ensures consistent dependency management across different environments.

## - What is the `dist` folder?

The dist folder, short for "distribution," is a directory commonly used in software projects, particularly in web development, to store files that are ready for deployment or distribution to end-users. It typically contains optimized and bundled files that are generated as part of the build process.

## Here's what you might find in a dist folder

Compiled Code: If your project involves compiling code from a higher-level language (e.g., TypeScript, Sass, or JSX), the compiled output will often be placed in the dist folder. For example, TypeScript files might be transpiled to JavaScript, Sass files might be compiled to CSS, and JSX might be transformed to regular JavaScript.

Bundled Assets: The dist folder may also contain bundled assets such as JavaScript bundles, CSS bundles, and image files. Bundling involves combining multiple source files into a single file or a set of files to optimize loading performance and reduce the number of HTTP requests required by the browser.

Minified and Optimized Files: In addition to bundling, the files in the dist folder are often minified, meaning unnecessary whitespace, comments, and other characters are removed to reduce file size. They may also be optimized for performance, such as by using techniques like code splitting, tree shaking, and image compression.

Static Files: Any static files that are part of your project, such as HTML files, font files, or configuration files, may also be included in the dist folder. These files are typically copied over from the source directory as part of the build process.

The dist folder is often used as the output directory for build tools like Webpack, Parcel, or Gulp. These tools take the source code of your project, process it (e.g., transpile, bundle, optimize), and output the resulting files into the dist folder. The contents of the dist folder are then ready to be deployed to a web server or distributed to end-users for consumption.

## - What is `browserlists`

The correct term is "Browserslist," not "browserlists." Browserslist is a tool used by various front-end development tools to define the list of target browsers and their versions for which a web application should be optimized. It allows developers to specify browser compatibility requirements in a simple and flexible manner.

## Here's how Browserslist is typically used

Configuration File: Browserslist is often configured using a configuration file named .browserslistrc, although it can also be configured through other means such as package.json or directly in the tool's configuration.

Query Syntax: In the configuration file, developers can specify the target browsers using a query syntax. This syntax allows you to specify specific browser versions, ranges of versions, or broader categories like "last 2 versions" or "> 5%". For example, last 2 versions would include the last two versions of all major browsers.

Integration with Development Tools: Browserslist is commonly used in conjunction with other front-end development tools such as Autoprefixer, Babel, and Stylelint. These tools use the Browserslist configuration to automatically add vendor prefixes, transpile JavaScript, or lint CSS according to the specified browser compatibility requirements.

By using Browserslist, developers can ensure that their web applications are optimized for the browsers and browser versions that their target audience uses most frequently. This helps improve cross-browser compatibility, performance, and user experience.

It's worth noting that while Browserslist is commonly used in front-end development workflows, it can also be used in other contexts where browser compatibility requirements need to be specified, such as server-side rendering or testing environments.