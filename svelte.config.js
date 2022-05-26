import adapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: adapter({
      edge: true,
      external: [],
      split: false
    }),
    vite: {
      define: {
        'process.env': process.env
      },
    }
  }
};
