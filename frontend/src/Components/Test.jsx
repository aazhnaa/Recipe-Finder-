
import React from 'react'

const Test = () => {
    
    const summary = "\u003Col\u003E\u003Cli\u003ENote: You can use a standing mixer with a dough hook to mix the dough, but we made our bread the old-fashioned way, kneading it with our hands.\u003C/li\u003E\u003Cli\u003ECombine the yeast with warm water (this is referred to as proofing the yeast) in a small bowl along with the sugar. Gently stir the mixture to dissolve everything. Allow the yeast to stand for about 3 minutes until it gets a bit foamy.\u003C/li\u003E\u003Cli\u003EAdd the flour to a large bowl and make a well in the center of it.\u003C/li\u003E\u003Cli\u003EIn a small bowl, dissolve the salt in a few tablespoons of water, and add it to the flour along with the yeast mixture. Next add the olive oil to the mixture.\u003C/li\u003E\u003Cli\u003EWith your hands and a spatula to scrape down the bowl, mix everything together to form the dough. Punch down and knead the dough, turning it as you go, for at least 10 minutes or until the dough is smooth, soft and pliable. Add a bit of flour to the dough as needed. Form the dough into a round ball.\u003C/li\u003E\u003Cli\u003EAdd some olive oil to your hands and smooth it over the dough ball to coat it and leave it in the bowl. Cover the bowl with a thick towel and place the bowl in a warm spot to let the dough rise to double its size (about 45 minutes to an hour).\u003C/li\u003E\u003Cli\u003ECoat a baking sheet (with sides) with olive oil and sprinkle a few tablespoons of cornmeal over the entire pan. Set aside.\u003C/li\u003E\u003Cli\u003EOnce the dough has risen, place it on a floured surface and punch it down 3-4 times. Allow it to stand for a few minutes while you get your toppings ready.\u003C/li\u003E\u003Cli\u003EMoving back to the dough, roll and stretch it out into an oblong shape that is about 1/2 an inch thick. Place the dough on the oiled baking sheet, cover it with plastic wrap and let it stand for about 15 minutes.\u003C/li\u003E\u003Cli\u003EPreheat your oven to 400 degrees F. After the dough has rested and youre ready to bake it, poke small wells all around the dough using your finger. Brush the surface of the dough with olive oil.\u003C/li\u003E\u003Cli\u003EEvenly sprinkle on the dried oregano, green onion, tomato and garlic. Sprinkle with coarse salt, then grated Parmesan cheese.\u003C/li\u003E\u003Cli\u003EBake on the bottom rack for 20 minutes, checking it as it gets close to the end of the baking time.\u003C/li\u003E\u003C/ol\u003E"
  return (
    <>
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Summary:</h2>
      <div
        className="list-decimal pl-6 text-black"
        dangerouslySetInnerHTML={{ __html: summary }}
      />
    </div>      
    </>
  )
}

export default Test
