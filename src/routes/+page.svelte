<script>
  import Divider from "../components/divider.svelte";
  import Link from "../components/link.svelte";
  import Project from "../components/project.svelte";
  import Review from "../components/review.svelte";
</script>

<svelte:head>
  <title>Home | Daniel George</title>
  <meta name="description" content="I'm Daniel, a web developer based in Surrey, England. Learn more about me on my portfolio." />
</svelte:head>

<section class="mt-20">
  <img src="/img/me.jpg" class="rounded-full w-28 h-28" alt="Me" />

  <h1 class="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]">
    I'm Daniel, a web developer based in Surrey, England.
  </h1>

  <div class="flex mt-6 gap-2">
    <a href="#section-contact" class="flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="-ml-0.5 mr-2 h-4 w-4">
        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
      </svg>
      Contact me
    </a>
    <a href="/blog" class="px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      View blog
    </a>
  </div>
</section>

<Divider title="About me" id="section-about" />

<section class="flex gap-12 flex-col sm:flex-row">
  <div class="text-gray-600">
    <p>
      Hi there, I'm Daniel. I'm a professional web developer with over 4 years of <Link href="https://www.fiverr.com/programmer_guy1">freelance experience</Link> using the latest frontend and backend technologies. Let's work together and transform your ideas into reality!
    </p>
    <p class="mt-3">
      Beyond coding, you can find me hitting the gym, going on runs, and playing basketball for my local team. I also have a strong entreprenurial drive; I love exploring new ideas and developing startups in my spare time.
      <!-- In my free time, I like to go to the gym, develop startups, and play basketball for my local team. -->
    </p>
  </div>
  <img class="sm:w-72 sm:h-72 rounded-lg shadow-sm" src="/img/me_large3.jpg" alt="A portrait of me" />
</section>

<Divider title="Work">
  A selection of some notable projects I have developed.
</Divider>

<section class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <Project name="Abehub 2" tags={["React", "SQL"]} link="https://github.com/othema/abehub2">
    <svg slot="icon" class="inline-block w-7 h-7 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:RDF><cc:Work><dc:title>Initials</dc:title><dc:creator><cc:Agent rdf:about=""><dc:title>Florian Körner</dc:title></cc:Agent></dc:creator><dc:source>https://github.com/dicebear/dicebear</dc:source><cc:license rdf:resource="https://creativecommons.org/publicdomain/zero/1.0/" /></cc:Work></rdf:RDF></metadata><mask id="viewboxMask"><rect width="100" height="100" rx="0" ry="0" x="0" y="0" fill="#fff" /></mask><g mask="url(#viewboxMask)"><rect fill="#e53935" width="100" height="100" x="0" y="0" /><g transform="translate(10 10) scale(0.8)"><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="50" font-weight="600" fill="#ffffff" text-anchor="middle" dy="17.800">AB</text></g></g></svg>
    A twitter-clone designed to connect students at Woking High School. Funded through a student-managed GoFundMe.
  </Project>
  <Project name="Tunemix" tags={["Electron", "React", "Ffmpeg"]} link="https://github.com/othema/tunemix">
    <svg slot="icon" class="inline-block w-7 h-7 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:RDF><cc:Work><dc:title>Initials</dc:title><dc:creator><cc:Agent rdf:about=""><dc:title>Florian Körner</dc:title></cc:Agent></dc:creator><dc:source>https://github.com/dicebear/dicebear</dc:source><cc:license rdf:resource="https://creativecommons.org/publicdomain/zero/1.0/" /></cc:Work></rdf:RDF></metadata><mask id="viewboxMask"><rect width="100" height="100" rx="0" ry="0" x="0" y="0" fill="#fff" /></mask><g mask="url(#viewboxMask)"><rect fill="#00acc1" width="100" height="100" x="0" y="0" /><g transform="translate(10 10) scale(0.8)"><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="50" font-weight="600" fill="#ffffff" text-anchor="middle" dy="17.800">TU</text></g></g></svg>
    A YouTube Music playlist generator for creating videos similar to <Link href="https://youtu.be/7moSR4YBzfE">this</Link>.
  </Project>
  <Project name="Bereal-Python" tags={["Python", "Backend", "API"]} link="https://github.com/othema/bereal-python">
    <svg slot="icon" class="inline-block w-7 h-7 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:RDF><cc:Work><dc:title>Initials</dc:title><dc:creator><cc:Agent rdf:about=""><dc:title>Florian Körner</dc:title></cc:Agent></dc:creator><dc:source>https://github.com/dicebear/dicebear</dc:source><cc:license rdf:resource="https://creativecommons.org/publicdomain/zero/1.0/" /></cc:Work></rdf:RDF></metadata><mask id="viewboxMask"><rect width="100" height="100" rx="0" ry="0" x="0" y="0" fill="#fff" /></mask><g mask="url(#viewboxMask)"><rect fill="#5e35b1" width="100" height="100" x="0" y="0" /><g transform="translate(10 10) scale(0.8)"><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="50" font-weight="600" fill="#ffffff" text-anchor="middle" dy="17.800">BP</text></g></g></svg>
    A python library that provides an easy-to-use interface to the Bereal API.
  </Project>
  <Project name="CommandAI" tags={["Python", "AI", "Command line"]} link="https://github.com/othema/command-ai">
    <svg slot="icon" class="inline-block w-7 h-7 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:RDF><cc:Work><dc:title>Initials</dc:title><dc:creator><cc:Agent rdf:about=""><dc:title>Florian Körner</dc:title></cc:Agent></dc:creator><dc:source>https://github.com/dicebear/dicebear</dc:source><cc:license rdf:resource="https://creativecommons.org/publicdomain/zero/1.0/" /></cc:Work></rdf:RDF></metadata><mask id="viewboxMask"><rect width="100" height="100" rx="0" ry="0" x="0" y="0" fill="#fff" /></mask><g mask="url(#viewboxMask)"><rect fill="#7cb342" width="100" height="100" x="0" y="0" /><g transform="translate(10 10) scale(0.8)"><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="50" font-weight="600" fill="#ffffff" text-anchor="middle" dy="17.800">CA</text></g></g></svg>
    An AI command-line tool that translates natural language into executable commands for your terminal.
  </Project>
  <Project name="Portfolio" tags={["Svelte", "Tailwind"]} link="https://github.com/othema/portfolio2">
    <svg slot="icon" class="inline-block w-7 h-7 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:RDF><cc:Work><dc:title>Initials</dc:title><dc:creator><cc:Agent rdf:about=""><dc:title>Florian Körner</dc:title></cc:Agent></dc:creator><dc:source>https://github.com/dicebear/dicebear</dc:source><cc:license rdf:resource="https://creativecommons.org/publicdomain/zero/1.0/" /></cc:Work></rdf:RDF></metadata><mask id="viewboxMask"><rect width="100" height="100" rx="0" ry="0" x="0" y="0" fill="#fff" /></mask><g mask="url(#viewboxMask)"><rect fill="#fdd835" width="100" height="100" x="0" y="0" /><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="50" font-weight="400" fill="#ffffff" text-anchor="middle" dy="17.800">PO</text></g></svg>
    My corner of the internet where I showcase my work and blog about technology.
  </Project>
  <Project name="WHS Blog" tags={["React", "SQL", "Blog"]} link="https://github.com/othema/whs-blog">
    <svg slot="icon" class="inline-block w7 h-7 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:RDF><cc:Work><dc:title>Initials</dc:title><dc:creator><cc:Agent rdf:about=""><dc:title>Florian Körner</dc:title></cc:Agent></dc:creator><dc:source>https://github.com/dicebear/dicebear</dc:source><cc:license rdf:resource="https://creativecommons.org/publicdomain/zero/1.0/" /></cc:Work></rdf:RDF></metadata><mask id="viewboxMask"><rect width="100" height="100" rx="0" ry="0" x="0" y="0" fill="#fff" /></mask><g mask="url(#viewboxMask)"><rect fill="#3949ab" width="100" height="100" x="0" y="0" /><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="50" font-weight="400" fill="#ffffff" text-anchor="middle" dy="17.800">WB</text></g></svg>
    A blogging platform developed for students to express their opinions on the Woking High School policies and discuss ideas.
  </Project>
</section>

<Divider title="Testimonials">
  Here is what my clients have said about me. (Taken from <Link href="https://www.fiverr.com/programmer_guy1">Fiverr</Link>)
</Divider>

<section class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <Review author="undressk">
    Amazing work with this professional. Looking forward to work with him again. Great communication skills.
  </Review>
  <Review author="rlhyperboosting">
    This is the second time I've worked with Daniel and the second I've been blown away with the quality of his work. Seriously incredible, he went above and beyond for each project I threw at him.
  </Review>
  <Review author="timhal">
    Achieved everything I asked for, even on a strict turnaround time. The work was amazing!
  </Review>
  <Review author="dsiharath98">
    Fantastic job and above all my expectations. As a rookie programmer, I can't even fathom how this can be created for the price!
  </Review>
</section>

<Divider title="Contact" id="section-contact">
  Let's get in touch and talk about your next project!
</Divider>

<section>
  <div class="flex gap-4">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-400">
      <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
    <p class="text-gray-600">djv.george@gmail.com</p>
  </div>
  <div class="flex gap-4 mt-3">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-400">
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
    <p class="text-gray-600">+44 7563 845940</p>
  </div>

  <form action="https://api.web3forms.com/submit" method="POST" class="flex flex-col gap-4 mt-5">
    <input type="hidden" name="access_key" value="cc8d5ce5-ee32-45c0-a178-fc53686a69aa" />

    <div class="flex gap-4 [&>*]:flex-grow flex-col sm:flex-row">
      <input type="text" name="name" autocomplete="name" class="text-sm shadow-sm py-2 px-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-lg" placeholder="Full name" />
      <input type="text" name="email" autocomplete="email" class="text-sm shadow-sm py-2 px-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-lg" placeholder="Email" />
    </div>
    <textarea name="message" rows="4" class="text-sm shadow-sm py-2 px-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-lg" placeholder="Message"></textarea>
    <button type="submit" class="flex items-center justify-center px-3 py-2.5 border border-transparent text-sm leading-4 font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="-ml-0.5 mr-2 h-4 w-4">
        <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
      </svg>
      Send message
    </button>
  </form>
</section>
