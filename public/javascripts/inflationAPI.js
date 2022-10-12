

const phantom = require('phantom');

const getInflation = async () => {
    const url = "https://tradingeconomics.com/united-kingdom/core-inflation-rate";
    const instance = await phantom.create(['--ignore-ssl-errors=yes', '--load-images=no']);
    const page = await instance.createPage();
    const status = await page.open(url);

    if (status !== 'success') {
      console.error(status);
      await instance.exit();
      return;
    }

    const content = await page.property('content');
    await instance.exit();
    const index_1 = content.indexOf(`<div id="ctl00_ContentPlaceHolder1_ctl00_ctl01_Panel1">`)
    const index_2 = content.indexOf(`<div id="ctl00_ContentPlaceHolder1_ctl00_ctl02_Panel1">`)
    const slice = content.slice(index_1, index_2)
    const index_3 = slice.indexOf(`<a href="/united-kingdom/inflation-cpi">`)
    const index_4 = slice.indexOf(`<tr class="datatable-row-alternating">`)
    // console.log(slice.includes(`<a href="/united-kingdom/inflation-cpi">`));

    const slice_2 = slice.slice(index_3, index_4)
    return([slice_2])
};


module.exports = getInflation;

