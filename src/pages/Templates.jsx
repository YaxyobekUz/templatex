import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Telegram
import useTelegram from "../hooks/useTelegram";

// Components
import Icon from "../components/Icon";
import Arrow from "../components/Arrow";
import EmptyData from "../components/EmptyData";

// Images
import listImg from "../assets/images/others/list.webp";
import deleteIcon from "../assets/images/icons/delete.svg";
import plusIcon from "../assets/images/icons/plus-white.svg";

const templatesData = [
  {
    id: 0,
    title: "Template title 1",
    title: "Template description",
  },
  {
    id: 1,
    title: "Template title 2",
    title: "Template description",
  },
  {
    id: 2,
    title: "Template title 3",
    title: "Template description",
  },
  {
    id: 3,
    title: "Template title 4",
    title: "Template description",
  },
  {
    id: 4,
    title: "Template title 5",
    title: "Template description",
  },
];

const Templates = () => {
  const { tg } = useTelegram();
  const [templates, setTemplates] = useState(templatesData);

  const deleteTemplate = (id) => {
    const params = {
      title: "Delete template",
      message: "Do you want to delete this template?",
      buttons: [
        {
          id: "delete",
          text: "Delete",
          type: "destructive",
        },
        {
          id: "cancel",
          text: "Cancel",
          type: "cancel",
        },
      ],
    };

    tg.showPopup(params, (buttonType) => {
      console.log(`${id}, ${buttonType},`);

      if (buttonType === "delete") {
        setTemplates((state) => state.filter((template) => template.id !== id));
      } else if (buttonType === "cancel") {
        console.log("Cancel");
      }
    });
  };

  useEffect(() => {
    tg.setHeaderColor("#fff");
  }, []);
  return (
    <>
      {/* Header */}
      <header className="flex flex-col items-center justify-center gap-4 pt-6">
        {/* page icon */}
        <Icon src={listImg} className="size-28" alt="3d list" size={112} />

        {/* page title */}
        <h1 className="text-center text-xl font-semibold xs:text-2xl">
          Templates
        </h1>

        {/* page description */}
        <p className="text-base text-center xs:text-lg">
          Increase your speed with <br className="xs:hidden" /> templates
        </p>
      </header>

      {/* Create a new template link */}
      <section className="section">
        <h2 className="section-title">New template</h2>

        {/* section content */}
        <Link
          to="/create/template"
          className="flex items-center justify-between gap-1.5 h-20 pl-4 pr-3 w-full bg-white rounded-2xl xs:h-24"
        >
          <div className="flex items-center gap-4">
            {/* icon */}
            <div className="flex items-center justify-center size-[50px] shrink-0 bg-lightAccent rounded-full xs:size-16">
              <Icon
                src={plusIcon}
                alt="plus icon"
                className="size-6 xs:size-7"
              />
            </div>

            <h3 className="text-base font-medium xs:text-lg">
              Create a new template
            </h3>
          </div>

          <Arrow direction="right" fill="#555" className="size-5 xs:size-6" />
        </Link>
      </section>

      {/* Templates list */}
      <section className="section">
        <h2 className="section-title">All templates</h2>

        {/* section content */}
        <div className="w-full bg-white rounded-2xl space-y-0.5">
          {templates.length > 0 ? (
            <ul>
              {templates.map((template) => (
                <li
                  key={template.id}
                  className="flex items-center justify-between relative h-20 pl-4 pr-0.5 w-full bg-white rounded-2xl xs:pr-1.5 xs:h-24"
                >
                  {/* template item main content */}
                  <div className="flex items-center gap-4 w-[calc(100%-50px)] xs:w-[calc(100%-54px)]">
                    {/* icon */}
                    <div className="flex items-center justify-center size-[50px] shrink-0 bg-primary rounded-full text-white text-lg xs:size-16">
                      {template.id + 1}
                      {/* <Icon
                    src={plusIcon}
                    alt="plus icon"
                    className="size-6 xs:size-7"
                  /> */}
                    </div>

                    {/* details */}
                    <div className="w-full overflow-hidden space-y-1.5">
                      <h3 className="text-base font-medium truncate xs:text-lg">
                        Template title
                      </h3>

                      {/* description */}
                      <p className="text-dark-800/80 text-[15px] leading-5 truncate xs:text-base">
                        Template description
                      </p>
                    </div>
                  </div>

                  {/* template link */}
                  <Link
                    to="/templates/template/id"
                    className="absolute inset-0 z-0 size-full rounded-2xl"
                  ></Link>

                  {/* delete btn */}
                  <button
                    onClick={() => deleteTemplate(template.id)}
                    className="flex items-center justify-center z-10 size-12 shrink-0 rounded-lg"
                  >
                    <Icon src={deleteIcon} className="size-6 xs:size-7" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyData className="py-9" />
          )}
        </div>
      </section>
    </>
  );
};

export default Templates;
