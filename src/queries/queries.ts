import { gql } from '@apollo/client';


interface Company {
  name: string;
  ceo: string;
  cto: string;
}

export interface CompanyData {
  company: Company;
}

export const GET_COMPANY_INFO = gql`
  query {
    company {
      name
      ceo
      cto
    }
  }
`;