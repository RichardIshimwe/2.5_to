export const GetSectionName = (key: string): string => {
  switch (key) {
    case "APPLICANT_DETAILS":
      return "Applicant details";

    case "VARIETY_IDENTIFICATION":
      return "Variety Identification";

    case "APPLICATION_DETAILS":
      return "Application Details";

    case "ATTACHMENT_DOCUMENT":
      return "Attachments";

    case "REQUEST_DETAILS_1":
      return "Request Details";

    case "BLASTING_MATERIAL_DETAILS":
      return "Blasting Material Details 1";

    case "EXPLOSIVE_USAGE_LOCATION":
      return "Explosion Usage Location";

    case "CONTACT_DETAILS":
      return "Contact Details";

    case "SUPPORTING_DOCUMENTS":
      return "Supporting Documents";

    case "FACILITY_DETAILS":
      return "Facility Details";

    default:
      return key;
  }
};
