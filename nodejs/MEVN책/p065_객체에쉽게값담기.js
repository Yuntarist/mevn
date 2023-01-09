const d = () => {return {'name':"최주원",'job':'마케터'}}
const dd = () => ({"name":"최주원",'job':'마케터'})
const {name} = d()
console.log(name)

const a2 = [1,2]
const [b,c] = a2
console.log(b.c)

const a3 = {"Name":"최주원",'job':'마케터'}
const {Name,job} = a3 
console.log(Name,job)
