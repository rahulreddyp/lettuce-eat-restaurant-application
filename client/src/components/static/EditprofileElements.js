// Author : Pavan Abburi
//This static component has labels for edit profile page
const content = (user) => {
  return [
    {
      label: "First Name",
      name: "firstName",
      type: "text",
      default: user.firstName,
    },
    {
      label: "Last Name",
      name: "lastName",
      type: "text",
      default: user.lastName,
    },
    {
      label: "Email",
      name: "email",
      type: "text",
      default: user.email,
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      default: user.address,
    },
  ];
};

export default content;
