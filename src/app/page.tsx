export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ramya Gopinath - Portrait Artist</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Georgia', serif;
            line-height: 1.6;
            color: #333;
            background-color: #fafafa;
        }
        
        header {
            background: white;
            padding: 2rem 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }
        
        .header-content {
            text-align: center;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            color: #2c3e50;
        }
        
        .tagline {
            font-size: 1.2rem;
            color: #7f8c8d;
            font-style: italic;
        }
        
        nav {
            margin-top: 2rem;
        }
        
        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 2rem;
        }
        
        nav a {
            text-decoration: none;
            color: #2c3e50;
            font-weight: bold;
            transition: color 0.3s;
        }
        
        nav a:hover {
            color: #e74c3c;
        }
        
        .hero {
            padding: 4rem 0;
            text-align: center;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .hero h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }
        
        .hero p {
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .gallery {
            padding: 4rem 0;
        }
        
        .gallery h2 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 3rem;
            color: #2c3e50;
        }
        
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 3rem;
        }
        
        .artwork {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .artwork:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }
        
        .artwork-image {
            width: 100%;
            height: 250px;
            background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
            color: #999;
            border-bottom: 1px solid #eee;
        }
        
        .artwork-info {
            padding: 1.5rem;
        }
        
        .artwork-info h3 {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            color: #2c3e50;
        }
        
        .artwork-info p {
            color: #666;
            font-size: 0.9rem;
        }
        
        .about {
            padding: 4rem 0;
            background: white;
        }
        
        .about-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 3rem;
            align-items: center;
        }
        
        .profile-image {
            width: 100%;
            height: 300px;
            background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #999;
        }
        
        .about h2 {
            font-size: 2rem;
            margin-bottom: 1.5rem;
            color: #2c3e50;
        }
        
        .about p {
            margin-bottom: 1rem;
            font-size: 1.1rem;
            line-height: 1.7;
        }
        
        .contact {
            padding: 4rem 0;
            background: #2c3e50;
            color: white;
            text-align: center;
        }
        
        .contact h2 {
            font-size: 2rem;
            margin-bottom: 2rem;
        }
        
        .contact-info {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-top: 2rem;
        }
        
        .contact-item {
            text-align: center;
        }
        
        .contact-item h3 {
            margin-bottom: 0.5rem;
            color: #ecf0f1;
        }
        
        .contact-item p {
            color: #bdc3c7;
        }
        
        .contact-item a {
            color: #e74c3c;
            text-decoration: none;
        }
        
        footer {
            background: #1a1a1a;
            color: #ccc;
            text-align: center;
            padding: 2rem 0;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 0 1rem;
            }
            
            h1 {
                font-size: 2rem;
            }
            
            nav ul {
                flex-direction: column;
                gap: 1rem;
            }
            
            .about-content {
                grid-template-columns: 1fr;
                text-align: center;
            }
            
            .contact-info {
                flex-direction: column;
                gap: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="header-content">
                <h1>Ramya Gopinath</h1>
                <p class="tagline">Portrait Artist</p>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <section id="home" class="hero">
        <div class="container">
            <h2>Capturing Life Through Art</h2>
            <p>I specialize in creating stunning portraits that capture the essence and emotion of my subjects. Each piece tells a unique story through careful attention to detail and artistic expression.</p>
        </div>
    </section>

    <section id="gallery" class="gallery">
        <div class="container">
            <h2>My Portfolio</h2>
            <div class="gallery-grid">
                <div class="artwork">
                    <div class="artwork-image">Portrait Sample 1</div>
                    <div class="artwork-info">
                        <h3>Classic Portrait</h3>
                        <p>Charcoal on paper, 2023</p>
                    </div>
                </div>
                <div class="artwork">
                    <div class="artwork-image">Portrait Sample 2</div>
                    <div class="artwork-info">
                        <h3>Modern Portrait</h3>
                        <p>Oil on canvas, 2023</p>
                    </div>
                </div>
                <div class="artwork">
                    <div class="artwork-image">Portrait Sample 3</div>
                    <div class="artwork-info">
                        <h3>Emotional Study</h3>
                        <p>Watercolor, 2023</p>
                    </div>
                </div>
                <div class="artwork">
                    <div class="artwork-image">Portrait Sample 4</div>
                    <div class="artwork-info">
                        <h3>Character Portrait</h3>
                        <p>Mixed media, 2023</p>
                    </div>
                </div>
                <div class="artwork">
                    <div class="artwork-image">Portrait Sample 5</div>
                    <div class="artwork-info">
                        <h3>Abstract Portrait</h3>
                        <p>Acrylic on canvas, 2022</p>
                    </div>
                </div>
                <div class="artwork">
                    <div class="artwork-image">Portrait Sample 6</div>
                    <div class="artwork-info">
                        <h3>Traditional Study</h3>
                        <p>Graphite on paper, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <div class="profile-image">
                    Artist Photo
                </div>
                <div>
                    <h2>About Me</h2>
                    <p>Welcome to my artistic world. I'm Ramya Gopinath, a passionate portrait artist dedicated to capturing the human spirit through my work.</p>
                    <p>With years of experience in various mediums including oil, watercolor, charcoal, and mixed media, I strive to create portraits that go beyond mere representation to reveal the inner essence of my subjects.</p>
                    <p>Each portrait is a collaboration between artist and subject, resulting in unique pieces that tell personal stories and preserve precious moments in time.</p>
                    <p>I'm always excited to take on new commissions and bring your vision to life through art.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="container">
            <h2>Let's Create Together</h2>
            <p>Interested in commissioning a portrait or learning more about my work?</p>
            <div class="contact-info">
                <div class="contact-item">
                    <h3>Email</h3>
                    <p><a href="mailto:ramya.gopinath.art@email.com">ramya.gopinath.art@email.com</a></p>
                </div>
                <div class="contact-item">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                </div>
                <div class="contact-item">
                    <h3>Studio</h3>
                    <p>Available by appointment</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2023 Ramya Gopinath. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>` }} />
  );
}