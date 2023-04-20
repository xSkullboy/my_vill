import React from 'react';
import Container from 'react-bootstrap/esm/Container';

const Main = () => {
  return (
    <div className='container py-3'>
      <main>
        <div className='row row-cols-1 row-cols-md-3 row-cols-sm-2 text-center justify-content-center'>
          <div className='col py-3'>
            <div className='card md-6 rounded'>
              <div className='card header'>
               
                  <p>
                    Вилла 1
                  </p>
                  <img className='rounded' src='/img/vill1.jpg' width={'300px'} height={'200px'}></img>
      
              </div>
            </div>
          </div>
        </div>
        <div className='row row-cols-1 row-cols-md-3 row-cols-sm-2 text-center justify-content-center'>
          <div className='col py-3'>
            <div className='card md-6 rounded'>
              <div className='card header'>
               
                  <p>
                    Вилла 2
                  </p>
                  <img className='rounded' src='/img/vill2.jpg' width={'300px'} height={'200px'}></img>
      
              </div>
            </div>
          </div>
        </div>
        <div className='row row-cols-1 row-cols-md-3 row-cols-sm-2 text-center justify-content-center'>
          <div className='col py-3'>
            <div className='card md-6 rounded'>
              <div className='card header'>
               
                  <p>
                    Вилла 3
                  </p>
                  <img className='rounded' src='/img/vill3.jpg' width={'300px'} height={'200px'}></img>
      
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Main