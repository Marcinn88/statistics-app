export const diagramData = [
  { label: "Main Expenses",  y: 8700  },
  { label: "Products", y: 3800.74  },
  { label: "Car", y: 1500  },
  { label: "Self care",  y: 800  },
  { label: "Child care",  y: 2208.50  },
  { label: "Household products",  y: 300  },
  { label: "Education",  y: 3400  },
  { label: "Leisure",  y: 1230  },
  { label: "Other expenses",  y: 610  }
]


// export const Expences = "tekst"
// const Expence = diagramData.filter(diagram => diagram.y === diagram.y>0)
// export const Expences = Expence.reduce((a, b)=>{a + b}).toString

// export const suma = diagramData.forEach(diagram => {
//   let sum = 0
//   sum = sum + diagram.y
//   console.log(sum)
//   console.log(diagramData.length)
//   return sum
// })

export const suma = (diagramData) => {
  let sum = 0
for (let i = 0; i < diagramData.length; i++) {
  sum += diagramData[i].y;
}
return sum
}
