/**
 * ZamTools Core Engine & Utilities
 * Global helpers, protocol resolution, and environment detection
 */

(function () {
  'use strict';

  // Ensure ZamTools namespace
  window.ZamTools = window.ZamTools || {};

  // Support local browsing via file:// protocol if HTML files are opened directly
  if (window.location.protocol === 'file:') {
    document.addEventListener('DOMContentLoaded', function () {
      var currentPath = window.location.pathname.replace(/\\/g, '/');
      var rootMarker = '/zamtools/';
      var rootIdx = currentPath.toLowerCase().indexOf(rootMarker);
      if (rootIdx === -1) {
        rootMarker = '/dist/';
        rootIdx = currentPath.toLowerCase().indexOf(rootMarker);
      }
      
      var baseDir = '';
      if (rootIdx !== -1) {
        baseDir = currentPath.substring(0, rootIdx + rootMarker.length);
      }

      if (baseDir) {
        document.querySelectorAll('a[href^="/"]').forEach(function (link) {
          var href = link.getAttribute('href');
          if (href && !href.startsWith('//')) {
            var hash = '';
            var hashIdx = href.indexOf('#');
            if (hashIdx !== -1) {
              hash = href.substring(hashIdx);
              href = href.substring(0, hashIdx);
            }
            var cleanPath = href.replace(/^\//, '');
            if (cleanPath === '' || cleanPath.endsWith('/')) {
              cleanPath += 'index.html';
            } else if (!cleanPath.endsWith('.html')) {
              cleanPath += '/index.html';
            }
            link.setAttribute('href', baseDir + cleanPath + hash);
          }
        });
      }
    });
  }
})();
