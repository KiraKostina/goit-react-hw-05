import { Field, Form, Formik } from 'formik';
import { toast, Toaster } from 'react-hot-toast';
import { GoSearch } from 'react-icons/go';
import css from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.searchbar}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          if (values.query.trim() === '') {
            toast.error('Please enter a keyword of search!');
            return;
          }
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.search_panel}>
          <Field
            className={css.search_field}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          ></Field>
          <button className={css.searchBtn} type="submit">
            <GoSearch />
          </button>
          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </Formik>
    </header>
  );
}
