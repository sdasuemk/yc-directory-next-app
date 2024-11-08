import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

interface SearchFormProps {
  query?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ query }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <section className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <Search className="size-5" /> 
        </button>
      </section>
    </Form>
  );
};

export default SearchForm;
