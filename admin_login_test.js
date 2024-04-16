const { Builder, By, Key, until } = require('selenium-webdriver');

async function testAdminLogin() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://localhost/new-management/adminlogin.php');
    await driver.findElement(By.name('username')).sendKeys('Admin1');
    await driver.findElement(By.name('password')).sendKeys('admin@sist123', Key.RETURN);

    await driver.wait(until.urlIs('http://localhost/new-management/adminhome.php'), 10000); 

    let currentUrl = await driver.getCurrentUrl();
    if (currentUrl === 'http://localhost/new-management/adminhome.php') {
      console.log('Admin login test passed!');
    } else {
      console.log('Admin login test failed! Unexpected URL:', currentUrl);
    }
  } finally {
    await driver.quit();
  }
}

testAdminLogin();
