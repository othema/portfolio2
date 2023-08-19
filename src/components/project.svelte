<script lang="ts">
  export let name: string;
  export let tags: string[] = [];
  export let link: string = "#";
</script>

<div class="rounded-lg p-6 border border-gray-200 hover:shadow duration-75">
  <!-- <svg class="inline-block w-7 h-7 rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:RDF><cc:Work><dc:title>Initials</dc:title><dc:creator><cc:Agent rdf:about=""><dc:title>Florian Körner</dc:title></cc:Agent></dc:creator><dc:source>https://github.com/dicebear/dicebear</dc:source><cc:license rdf:resource="https://creativecommons.org/publicdomain/zero/1.0/" /></cc:Work></rdf:RDF></metadata><mask id="viewboxMask"><rect width="100" height="100" rx="0" ry="0" x="0" y="0" fill="#fff" /></mask><g mask="url(#viewboxMask)"><rect fill="#7cb342" width="100" height="100" x="0" y="0" /><g transform="translate(10 10) scale(0.8)"><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="50" font-weight="600" fill="#ffffff" text-anchor="middle" dy="17.800">CA</text></g></g></svg> -->

  <slot name="icon" />
  <h3 class="inline ml-2 align-middle text-md font-medium">{name}</h3>
  <a href={link} target="_blank" class="float-right text-gray-600 hover:text-gray-700" type="button">
    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
      <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
    </svg>
  </a> 
  <p class="mt-2.5 text-gray-600 text-sm"><slot /></p>
  
  <div class="mt-3 flex gap-1.5">
    {#each tags as tag}
      <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{tag}</span>
    {/each}
  </div>
</div>