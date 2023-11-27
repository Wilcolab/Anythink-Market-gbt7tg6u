//TODO: seeds script should come here, so we'll be able to put some data in our local env
// const { PrismaClient } = require('@prisma/client')
// const { categories, products } = require('./data.js')
// const prisma = new PrismaClient()
// // 2
// const load = async () => {
//     try {
//     } catch (e) {
//       console.error(e)
//       process.exit(1)
//     } finally {
//       await prisma.$disconnect()
//     }
//   }
//   load()
// // 3
//   await prisma.category.createMany({
//     data: categories
//   })
//   console.log('Added category data')
  
//   await prisma.product.createMany({
//     data: products
//   })
//   console.log('Added product data')
// // 4
//   await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`
// console.log('reset product auto increment to 1')

// await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`
// console.log('reset category auto increment to 1')

// // 5
// await prisma.$queryRaw`ALTER TABLE Product AUTO_INCREMENT = 1`
// console.log('reset product auto increment to 1')

// await prisma.$queryRaw`ALTER TABLE Category AUTO_INCREMENT = 1`
// console.log('reset category auto increment to 1')


