import Header from '../components/Header';
import Tbody from '../components/Tbody';
import {ErrorBoundary} from 'react-error-boundary';
import {ErrorFallBack} from '../components/ErrorFallBack';

function App() {
 return <>
    <Header />
    <ErrorBoundary
     FallbackComponent={ErrorFallBack}>
      <Tbody />
    </ErrorBoundary>
    </>
}

export default App;