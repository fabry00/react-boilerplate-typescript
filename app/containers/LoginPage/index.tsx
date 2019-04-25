/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
// import { compose, Dispatch } from 'redux';
// import { createStructuredSelector } from 'reselect';

// import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import {
//   makeSelectRepos,
//   makeSelectLoading,
//   makeSelectError,
// } from 'containers/App/selectors';
// import H2 from 'components/H2';
// import ReposList from 'components/ReposList';

// tslint:disable-next-line:no-empty-interface
interface OwnProps {}

interface StateProps {
  // loading: boolean;
  // error: object | boolean;
  // repos: object[] | boolean;
  // username: string;
}

interface DispatchProps {
  // onChangeUsername(evt: any): void; // Not gonna declare event types here. No need. any is fine
  // onSubmitForm(evt?: any): void; // Not gonna declare event types here. No need. any is fine
}

type Props = StateProps & DispatchProps & OwnProps;

export class LoginPage extends React.PureComponent<Props> {

  public componentDidMount() {

  }

  public render() {

    return (
      <div>
        <Helmet>
            <title>Login Page</title>
            <meta
              name="description"
              content="A React.js Boilerplate application homepage"
            />
          </Helmet>
        Login
        </div>
    );
  }
}

// Map Disptach to your DispatchProps
// export function mapDispatchToProps(
//   dispatch: Dispatch,
//   ownProps: OwnProps,
// ): DispatchProps {
//   return {
//     onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
//     onSubmitForm: evt => {
//       if (evt !== undefined && evt.preventDefault) {
//         evt.preventDefault();
//       }
//       dispatch(loadRepos());
//     },
//   };
// }

// // Map RootState to your StateProps
// const mapStateToProps = createStructuredSelector<RootState, StateProps>({
//   repos: makeSelectRepos(),
//   username: makeSelectUsername(),
//   loading: makeSelectLoading(),
//   error: makeSelectError(),
// });

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

// const withReducer = injectReducer<OwnProps>({ key: 'home', reducer: reducer });
// const withSaga = injectSaga<OwnProps>({ key: 'home', saga: saga });

// export default compose(
//   withReducer,
//   withSaga,
//   withConnect,
// )(HomePage);
