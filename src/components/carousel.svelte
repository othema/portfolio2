<script lang="ts">
	import { twMerge } from "tailwind-merge";

  let currentIndex = 0;

  let class_: string = "";
  export { class_ as class };

  export let length: number = 0;
  export let autoScroll: number = 0;

  let clear: any;
  const incr = () => currentIndex = (currentIndex + 1) % length
  $: {
    if (autoScroll > 0) {
      clearInterval(clear);
      clear = setInterval(incr, autoScroll * 1000);
    }
  }
</script>

<div class={twMerge("w-full overflow-hidden relative", class_)}>
  <div class={twMerge("flex transition-transform duration-700 ease-in-out [&>*]:w-full [&>*]:flex-shrink-0", class_)} style={`transform: translateX(-${(currentIndex * 100)}%)`}>
    <slot />
  </div>

  <button class="bg-white p-2 rounded-full hover:bg-gray-100 duration-75 absolute top-1/2 -translate-y-1/2 left-4 shadow-lg" on:click={() => currentIndex = (currentIndex - 1) % length }>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>    
  </button>

  <button class="bg-white p-2 rounded-full hover:bg-gray-100 duration-75 absolute top-1/2 -translate-y-1/2 right-4 shadow-lg" on:click={() => {
    incr();
    if (autoScroll > 0) {
      clearInterval(clear);
      clear = setInterval(incr, autoScroll * 1000);
    }
  }}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>       
  </button>
</div>
