import adapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: adapter(),
    vite: {
      define: {
        'process.env': process.env
      },
    }
  }
};
