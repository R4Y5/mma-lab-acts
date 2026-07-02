// Injects the shared site footer into <div id="footer"></div>
// Include on every page:
//   <link rel="stylesheet" href="../assets/css/footer.css" />
//   <div id="footer"></div>
//   <script src="../assets/js/footer.js"></script>

(function () {
  const mount = document.getElementById('footer');
  if (!mount) return;

  const year = new Date().getFullYear();

  mount.innerHTML = `
    <footer class="site-footer">
      <div class="site-footer-inner">
        <p class="site-footer-notice">
          <strong>Educational purposes only.</strong>
          This project and all attached files (videos, scripts, images, and other assets)
          were created for academic coursework and are not intended for commercial use
          or redistribution.
        </p>
        <span class="site-footer-meta">© ${year} · ITCI231</span>
      </div>
    </footer>
  `;
})();