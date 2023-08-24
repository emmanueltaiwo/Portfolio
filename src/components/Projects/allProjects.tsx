import React, { useState, useRef, useEffect } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { projectsData } from "../db/projectsData";
import { projectTechStackList } from "../db/projectsData";
import FlipMove from "react-flip-move";
import Project from "./project";

const AllProjects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [search, setSearch] = useState("");
  const [showButtons, setShowButtons] = useState(false);
  //State to store the current active navigation title
  const [currentActive, setCurrentActive] = useState<string[] | string>("All");

  //Ref to store the previous active navigation title
  const prevActiveValueRef = useRef<string[] | string>(currentActive); // Initialize the ref with the initial value

  //function to handle the navigation onclick event
  const handleNavigationChange = (id: any) => {
    //this variable is used to keep track of the navigation that was clicked
    let newActiveNavigation = projectTechStackList.filter(
      (data) => data.id === id
    );
    //this variable is used to get the title of the navigation that was clicked
    let newActiveNavigationTitle = newActiveNavigation.map(
      (data) => data.title
    );

    //this create a replica of the navigation data
    const newData = [...projectTechStackList];

    //this variable find the particular id in the navigation data that was clicked
    const indexToUpdate = newData.findIndex((item) => item.id === id);

    // If the object is found, update the 'name' property to the previous current value
    if (indexToUpdate !== -1) {
      newData[indexToUpdate].title = prevActiveValueRef.current.toString();
    }

    //set the current active state to the new active value
    setCurrentActive(newActiveNavigationTitle);

    if (newActiveNavigationTitle.toString().toUpperCase() === "ALL") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((data) =>
          data.techStack.some(
            (tech) =>
              tech.toLowerCase() ===
              newActiveNavigationTitle.toString().toLowerCase()
          )
        )
      );
    }

    //hide the buttons list on mobile devices
    setShowButtons(false);
  };

  //useEffect to update the ref to the current active value
  useEffect(() => {
    prevActiveValueRef.current = currentActive;
  }, [currentActive]);

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
    setFilteredProjects(
      projectsData.filter(
        (data) =>
          data.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          data.description.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  return (
    <main className="w-full mt-[10vh] bg-white h-full py-10">
      <h1 className="mx-5 lg:mx-10 xl:mx-20 text-center text-[40px] md:text-[60px] lg:text-[70px] text-slate-800 font-extrabold">
        Check Out All My Projects
      </h1>
      <div className="w-full mt-5 flex flex-col justify-center">
        <input
          type="search"
          className="lg:w-[50%] md:w-[60%] w-[90%] font-bold focus:border-blue-700 rounded-md border-[1px] mx-auto border-slate-800 py-3 px-3 text-lg outline-none"
          placeholder="Search For Project By Keywords"
          value={search}
          onChange={handleSearchChange}
        />

        <div className="flex flex-col mx-auto sm:flex-row mt-5 lg:mt-16 flex-wrap gap-5 justify-center">
          <button className="w-fit hidden sm:block px-5 py-2 bg-blue-700 text-white font-medium">
            {currentActive}
          </button>

          {projectTechStackList.slice(0, 9).map((data) => (
            <button
              className="hidden sm:block w-fit px-5 py-2 bg-transparent text-black border-[1.5px] border-blue-700 font-medium"
              key={data.id}
              onClick={() => handleNavigationChange(data.id)}
            >
              {data.title}
            </button>
          ))}

          <button
            onClick={() => {
              setShowButtons((prevShowButtons) => !prevShowButtons);
            }}
            className="w-[220px] flex justify-between sm:hidden px-5 py-2 bg-blue-700 text-white font-medium"
          >
            {currentActive}{" "}
            {showButtons ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </button>
          <FlipMove>
            {showButtons && (
              <div className="sm:hidden gap-2 flex flex-col transition-all duration-200">
                {projectTechStackList.slice(0, 9).map((data) => (
                  <button
                    className="w-[220px] px-5 py-2 bg-transparent text-black-default border-[1.5px] border-blue-700 font-medium"
                    key={data.id}
                    onClick={() => handleNavigationChange(data.id)}
                  >
                    {data.title}
                  </button>
                ))}
              </div>
            )}
          </FlipMove>
        </div>
      </div>

      <section className="w-full mt-[10vh] lg:mx-0 flex flex-col gap-20">
        {filteredProjects.length === 0 ? (
          <h1 className="mx-5 lg:mx-10 xl:mx-20 text-center text-[20px] md:text-[30px] text-slate-800 font-medium">
            No Projects Found for{" "}
            <span className="text-blue-700">({search})</span>, Try Searching New
            KeyWords
          </h1>
        ) : (
          filteredProjects.map((data) => (
            <Project
              key={data.id}
              id={data.id}
              featuredProjects={data.featuredProjects}
              title={data.title}
              description={data.description}
              techStack={data.techStack}
              liveLink={data.liveLink}
              githubRepo={data.githubRepo}
              coverImg={data.coverImg}
            />
          ))
        )}
      </section>
    </main>
  );
};

export default AllProjects;
