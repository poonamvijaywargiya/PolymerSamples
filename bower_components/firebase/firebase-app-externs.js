/**
 * @fileoverview Firebase namespace and Firebase App API.
 * Version: 3.6.6
 *
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @externs
 */

/**
 * <code>firebase</code> is a global namespace from which all the Firebase
 * services are accessed.
 *
 * @namespace
 */
var firebase = {};

/**
 * Creates and initializes a Firebase {@link firebase.app.App app} instance.
 *
 * See
 * {@link
 *   https://firebase.google.com/docs/web/setup#initialize_the_sdk
 *   Initialize the SDK} and
 * {@link
 *   https://firebase.google.com/docs/web/setup#initialize_multiple_apps
 *   Initialize multiple apps} for detailed documentation.
 *
 * @example
 * // Initialize default app
 * // Retrieve your own options values by adding a web app on
 * // https://console.firebase.google.com
 * firebase.initializeApp({
 *   apiKey: "AIza....",                             // Auth / General Use
 *   authDomain: "YOUR_APP.firebaseapp.com",         // Auth with popup/redirect
 *   databaseURL: "https://YOUR_APP.firebaseio.com", // Realtime Database
 *   storageBucket: "YOUR_APP.appspot.com",          // Storage
 *   messagingSenderId: "123456789"                  // Cloud Messaging
 * });
 *
 * @example
 * // Initialize another app
 * var otherApp = firebase.initializeApp({
 *   databaseURL: "https://<OTHER_DATABASE_NAME>.firebaseio.com",
 *   storageBucket: "<OTHER_STORAGE_BUCKET>.appspot.com"
 * }, "otherApp");
 *
 * @param {!Object} options Options to configure the app's services.
 * @param {string=} name Optional name of the app to initialize. If no name
 *   is provided, the default is `"[DEFAULT]"`.
 *
 * @return {!firebase.app.App} The initialized app.
 */
firebase.initializeApp = function(options, name) {};

/**
 * Retrieves a Firebase {@link firebase.app.App app} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * // Return the default app
 * var app = firebase.app();
 *
 * @example
 * // Return a named app
 * var otherApp = firebase.app("otherApp");
 *
 * @namespace
 * @param {string=} name Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @return {!firebase.app.App} The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 */
firebase.app = function(name) {};

/**
 * A (read-only) array of all initialized apps.
 * @type {!Array<firebase.app.App>}
 */
firebase.apps;

/**
 * The current SDK version.
 * @type {string}
 */
firebase.SDK_VERSION;

/**
 * A Firebase App holds the initialization information for a collection of
 * services.
 *
 * Do not call this constructor directly. Instead, use
 * {@link firebase#.initializeApp `firebase.initializeApp()`} to create an app.
 *
 * @interface
 */
firebase.app.App = function() {};

/**
 * The (read-only) name for this app.
 *
 * The default app's name is `"[DEFAULT]"`.
 *
 * @example
 * // The default app's name is "[DEFAULT]"
 * firebase.initializeApp(defaultAppConfig);
 * console.log(firebase.app().name);  // "[DEFAULT]"
 *
 * @example
 * // A named app's name is what you provide to initializeApp()
 * var otherApp = firebase.initializeApp(otherAppConfig, "other");
 * console.log(otherApp.name);  // "other"
 *
 * @type {string}
 */
firebase.app.App.prototype.name;

/**
 * The (read-only) configuration options for this app. These are the original
 * parameters given in
 * {@link firebase#.initializeApp `firebase.initializeApp()`}.
 *
 * @example
 * var app = firebase.initializeApp(config);
 * console.log(app.options.credential === config.credential);  // true
 * console.log(app.options.databaseURL === config.databaseURL);  // true
 *
 * @type {!Object}
 */
firebase.app.App.prototype.options;

/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * app.delete()
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 *
 * @return {!firebase.Promise<void>} An empty promise fulfilled when the app has
 *   been deleted.
 */
firebase.app.App.prototype.delete = function() {};

/**
 * A Thenable is the standard interface returned by a Promise.
 *
 * @template T
 * @interface
 */
firebase.Thenable = function() {};

/**
 * Assign callback functions called when the Thenable value either
 * resolves, or is rejected.
 *
 * @param {(function(T): *)=} onResolve Called when the Thenable resolves.
 * @param {(function(!Error): *)=} onReject Called when the Thenable is rejected
 *   (with an error).
 * @return {!firebase.Thenable<*>}
 */
firebase.Thenable.prototype.then = function(onResolve, onReject) {};

/**
 * Assign a callback when the Thenable rejects.
 *
 * @param {(function(!Error): *)=} onReject Called when the Thenable is rejected
 *   (with an error).
 * @return {!firebase.Thenable<*>}
 */
firebase.Thenable.prototype.catch = function(onReject) {};

/**
 * A Promise represents an eventual (asynchronous) value. A Promise should
 * (eventually) either resolve or reject. When it does, it will call all the
 * callback functions that have been assigned via the <code>.then()</code> or
 * <code>.catch()</code> methods.
 *
 * <code>firebase.Promise</code> is the same as the native Promise
 * implementation when available in the current environment, otherwise it is a
 * compatible implementation of the Promise/A+ spec.
 *
 * @template T
 * @constructor
 * @implements {firebase.Thenable}
 * @param {function((function(T): void),
 *                  (function(!Error): void))} resolver
 */
firebase.Promise = function(resolver) {};

/**
 * Assign callback functions called when the Promise either resolves, or is
 * rejected.
 *
 * @param {(function(T): *)=} onResolve Called when the Promise resolves.
 * @param {(function(!Error): *)=} onReject Called when the Promise is rejected
 *   (with an error).
 * @return {!firebase.Promise<*>}
 */
firebase.Promise.prototype.then = function(onResolve, onReject) {};

/**
 * Assign a callback when the Promise rejects.
 *
 * @param {(function(!Error): *)=} onReject Called when the Promise is rejected
 *   (with an error).
 */
firebase.Promise.prototype.catch = function(onReject) {};

/**
 * Return a resolved Promise.
 *
 * @template T
 * @param {T=} value The value to be returned by the Promise.
 * @return {!firebase.Promise<T>}
 */
firebase.Promise.resolve = function(value) {};

/**
 * Return (an immediately) rejected Promise.
 *
 * @param {!Error} error The reason for the Promise being rejected.
 * @return {!firebase.Promise<*>}
 */
firebase.Promise.reject = function(error) {};

/**
 * Convert an array of Promises, to a single array of values.
 * <code>Promise.all()</code> resolves only after all the Promises in the array
 * have resolved.
 *
 * <code>Promise.all()</code> rejects when any of the promises in the Array have
 * rejected.
 *
 * @param {!Array<!firebase.Promise<*>>} values
 * @return {!firebase.Promise<!Array<*>>}
 */
firebase.Promise.all = function(values) {};



/**
 *
 * FirebaseError is a subclass of the standard JavaScript Error object. In
 * addition to a message string, it contains a string-valued code.
 *
 * @interface
 */
firebase.FirebaseError;

/**
 * Error codes are strings using the following format:
 *
 *   "service/string-code"
 *
 * While the message for a given error can change, the code will remain the same
 * between backward-compatible versions of the Firebase SDK.
 *
 * @type {string}
 */
firebase.FirebaseError.prototype.code;

/**
 * An explanatory message for the error that just occurred.
 *
 * This message is designed to be helpful to you, the developer.  It
 * is not intended that you display it to the end user of your application
 * (as it will generally not convey meaningful information to them).
 *
 * @type {string}
 */
firebase.FirebaseError.prototype.message;

/**
 * The name of the class of Errors.
 * @type {string}
 */
firebase.FirebaseError.prototype.name;

/**
 * A string value containing the execution backtrace when the error originally
 * occurred.
 *
 * This information can be useful to you and can be sent to
 * {@link https://firebase.google.com/support/ Firebase Support} to help
 * explain the cause of an error.
 *
 * @type {string}
 */
firebase.FirebaseError.prototype.stack;
