import { useEffect } from "react";
import Banner from "../components/home/Banner";
import { useState } from "react";
import RecepiCard from "../components/cards/RecepiCard";
import CategoryCard from "../components/cards/CategoryCard";

export default function Home() {
  const [recipes, setRescipes] = useState();
  const [categoris, setCategories] = useState();
  useEffect(() => {
    // fetch("http://localhost:3000/recipes")
    //   .then((res) => res.json())
    //   .then((data) => setRescipes(data));

    async function load() {
      //get recipies
      const recipeRes = await fetch("http://localhost:3000/recipes");
      const recipeData = await recipeRes.json();
      setRescipes(recipeData);
      //get categories

      const categoryRes = await fetch("http://localhost:3000/categories");
      const categoryData = await categoryRes.json();

      setCategories(categoryData);
    }
    load();

    // fetch("http://localhost:3000/categories")
    //   .then((res) => res.json())
    //   .then((data) => setCategories(data));
  }, []);

  // console.log("hi");
  return (
    <div>
      <Banner />

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center"> </h1>
        <div className="grid grid-cols-6 gap-4 justify-center my-12">
          <img className="w-48 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpB7WKTKuQx5GYIlXrVSQFGg_Em33wnvHFyYFoVVNOw&s" alt="" />
          <img className="w-48 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbbNH4fyuuIpfrcyr6f_ve9vyGUEFObOOyk4YZLYkREA&s" alt="" />
          <img className="w-48 h-48" src="https://www.foodandwine.com/thmb/fVmYbaQzXCz1Prx8VxrW9sMcjMU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Braciole-FT-RECIPE1122-66acf49cef0e4390bec780945709e7f3.jpg" alt="" />
          <img className="w-48 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabvLdJRpZ9IBz1yYS8gVSpXLyaCRl2lAIypqwFB6Sxg&s" alt="" />
          <img className="w-48 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbbNH4fyuuIpfrcyr6f_ve9vyGUEFObOOyk4YZLYkREA&s" alt="" />
          <img className="w-48 h-48" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpB7WKTKuQx5GYIlXrVSQFGg_Em33wnvHFyYFoVVNOw&s" alt="" />
        </div>
      </div>

      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center font-semibold">Our Recipe Categories </h1>
        <div className="grid grid-cols-4 gap-6">
          {categoris?.map((category) => (
            <CategoryCard key={category?.id} category={category} />
          ))}
        </div>
      </div>
      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center font-semibold">Our Newest Recipes </h1>
        <div className="grid grid-cols-4 gap-6">
          {recipes
            ?.reverse()
            ?.slice(0, 4)
            ?.map((recipe) => (
              <RecepiCard key={recipe?.id} recipe={recipe} />
            ))}
        </div>
      </div>
      <div className="mx-16">
        <h1 className="text-4xl my-20 text-center font-semibold">Our Popular Recipes</h1>
        <div className="grid grid-cols-4 gap-6">
          {recipes
            ?.reverse()
            ?.slice(5, 9)
            ?.map((recipe) => (
              <RecepiCard key={recipe?.id} recipe={recipe} />
            ))}
        </div>
      </div>

      <div className="flex justify-center gap-20 opacity-25 my-24">
            <h1 className="text-5xl text-[#505050] font-normal font-Playfair Display">Cook</h1>
            <h1 className="text-5xl text-[#505050] font-medium font-Poppins">Fellowship</h1>
            <h1 className="text-5xl text-[#505050] font-normal font-Vidaloka">DishDepot</h1>
            <h1 className="text-5xl text-[#505050] font-bold font-Montserrat">Cuisine</h1>
        </div>
    </div>
  );
}
