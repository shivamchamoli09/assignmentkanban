import { IKanban } from "@/components/kanban";

export const toDoTasksData: IKanban = {
  title: "To Do",
  primaryColor: "#5030E5",
  allowAction: true,
  tasks: [
    {
      id: "t1",
      taskBgColor: "rgba(223, 168, 116, 0.2)",
      taskTitle: "Low",
      title: "Brainstorming",
      taskColor: "#D58D49",
      caption:
        "Brainstorming brings team members' diverse experience into play.",
      type: "todo",
    },
    {
      id: "t2",
      type: "todo",
      taskBgColor: "rgba(223, 168, 116, 0.2)",
      taskTitle: "High",
      taskColor: "#D58D49",
      title: "Research",
      caption:
        "User research helps you to create an optimal product for users.",
    },
  ],
};

export const onProgressTasksData: IKanban = {
  title: "On Progress",
  primaryColor: "#FFA500",
  tasks: [
    {
      id: "i1",
      type: "inprogress",
      taskBgColor: "rgba(223, 168, 116, 0.2)",
      taskTitle: "Low",
      title: "Onboarding Illustrations",
      taskColor: "#D58D49",
      //   caption:
      //     "Brainstorming brings team members' diverse experience into play. ",
      imageUrl: ["/progress1.png"],
    },
    {
      id: "i2",
      type: "inprogress",
      taskBgColor: "rgba(223, 168, 116, 0.2)",
      taskTitle: "Low",
      taskColor: "#D58D49",
      title: "Moodboard",
      //   caption:
      //     "Brainstorming brings team members' diverse experience into play. ",
      imageUrl: ["/progress2.png", "progress3.png"],
    },
  ],
};

export const completedTasksData: IKanban = {
  title: "Done",
  primaryColor: "#76A5EA",
  lineColor: "#8BC48A",
  tasks: [
    {
      id: "c1",
      type: "completed",
      taskBgColor: "rgba(131, 194, 157, 0.2)",
      taskTitle: "Completed",
      title: "Mobile App Design",
      taskColor: "#68B266",
      //   caption:
      //     "Brainstorming brings team members' diverse experience into play. ",
      imageUrl: ["/completed.png"],
    },
    {
      id: "c2",
      type: "completed",
      taskBgColor: "rgba(131, 194, 157, 0.2)",
      taskTitle: "Completed",
      taskColor: "#68B266",
      title: "Design System",
      caption:
        "Brainstorming brings team members' diverse experience into play. ",
    },
  ],
};
