import { OrganizationList } from "@clerk/nextjs";

const CreateOrganisationPage = () => {
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
};

export default CreateOrganisationPage;
