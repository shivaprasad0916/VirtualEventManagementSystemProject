<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact Us – Upgrad Events</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

<nav>
  <a class="nav-brand" href="index.html">Upgrad Events</a>
  <div class="nav-links">
    <a href="index.html">Home</a>
    <a href="login.html">Login</a>
    <a href="events.html">Events</a>
    <a href="contact.html" class="active">Contact Us</a>
  </div>
</nav>

<main>
  <div style="max-width:560px; margin:0 auto;">
    <h1 style="font-family:'Sora',sans-serif; font-size:1.75rem; font-weight:700; margin-bottom:1.5rem;">Contact Us</h1>

    <div class="form-card">
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" id="cName" placeholder="Your name" />
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" id="cEmail" placeholder="your@email.com" />
      </div>
      <div class="form-group">
        <label>Message</label>
        <textarea id="cMsg" rows="5" placeholder="Write your message…"
          style="width:100%;padding:0.6rem 0.875rem;border:1px solid var(--gray-border);border-radius:6px;font-family:'DM Sans',sans-serif;font-size:0.9rem;resize:vertical;outline:none;"></textarea>
      </div>
      <button class="btn btn-blue" onclick="sendMsg()">Send Message</button>
    </div>

    <div id="ctSuccess" class="form-card" style="display:none; margin-top:1rem; border-left:4px solid var(--green);">
      <p style="color:var(--green); font-weight:600;">✓ Message sent! We'll get back to you soon.</p>
    </div>

    <div class="form-card" style="margin-top:1.5rem; background:var(--blue-light);">
      <p style="font-size:0.9rem; color:#374151; line-height:1.8;">
        📧 <strong>Email:</strong> support@upgrad.com<br/>
        📞 <strong>Phone:</strong> +1 (800) 123-4567<br/>
        🏢 <strong>Address:</strong> 123 Innovation Drive, Tech City, CA 94000
      </p>
    </div>
  </div>
</main>

<div class="toast" id="toast"></div>

<script src="app.js"></script>
<script>
  function sendMsg() {
    const n = document.getElementById('cName').value.trim();
    const e = document.getElementById('cEmail').value.trim();
    const m = document.getElementById('cMsg').value.trim();
    if (!n || !e || !m) { showToast('Please fill in all fields.', 'error'); return; }
    document.getElementById('ctSuccess').style.display = 'block';
    document.getElementById('cName').value = '';
    document.getElementById('cEmail').value = '';
    document.getElementById('cMsg').value = '';
    showToast('Message sent!', 'success');
  }
</script>
</body>
</html>
