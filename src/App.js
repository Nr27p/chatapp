import './App.css';
import Home from './Pages/Home';
import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    // <View className='App'>
    //   <Card>
    //   <Heading level={1}>Welcome to the RTCS</Heading>
    // </Card>
    // <Button onClick={signOut}>Sign Out</Button>
    // </View>
    <div>
      <Home/>
    </div>
  );
}

export default App;
