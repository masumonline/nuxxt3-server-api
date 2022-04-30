export default defineEventHandler((event) => {
  return {
    api: `works, ${event.context.params.name}`
  }
})
