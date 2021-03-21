import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className='background'>
        <h2 className='title'>Product: Product-name</h2> {/* box one */}
        <div className='box2'> {/* box two */}
          <div className='box3'>{/* box three */}
            <div className='box4'>{/* box three */}
              <h3>Name</h3>
              <label>
                <input
                  type='text'
                  name='Card Reading'
                  />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
