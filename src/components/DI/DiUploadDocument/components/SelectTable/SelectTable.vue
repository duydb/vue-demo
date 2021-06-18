<template>
  <div>
    <div class="text-right mb-4">
      <a href="#" class="text-muted">
        <img src="@/assets/icons/ic-16-edit.svg" alt="" width="16" height="16" class="mr-1">
        Preview Selection
      </a>
    </div>
    <div class="row">
      <div class="col-12 col-sm-7 col-md-8 col-lg-9">
        <div class="table-container">
          <table class="table table-striped mb-0">
            <thead>
            <tr>
              <th>Name</th>
              <th>Region</th>
              <th>Country</th>
              <th>Item type</th>
              <th>Sales channel</th>
            </tr>
            <tr>
              <th>Type</th>
              <th>
                <div class="dropdown dropdown-th">
                  <a href="#" class="text-white font-weight-normal dropdown-toggle" data-toggle="dropdown">String</a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">String</a>
                    <a href="#" class="dropdown-item">Integer</a>
                    <a href="#" class="dropdown-item">Long</a>
                    <a href="#" class="dropdown-item">Date</a>
                    <a href="#" class="dropdown-item">Boolean</a>
                  </div>
                </div>
              </th>
              <th>
                <div class="dropdown dropdown-th">
                  <a href="#" class="text-white font-weight-normal dropdown-toggle" data-toggle="dropdown">String</a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">String</a>
                    <a href="#" class="dropdown-item">Integer</a>
                    <a href="#" class="dropdown-item">Long</a>
                    <a href="#" class="dropdown-item">Date</a>
                    <a href="#" class="dropdown-item">Boolean</a>
                  </div>
                </div>
              </th>
              <th>
                <div class="dropdown dropdown-th">
                  <a href="#" class="text-white font-weight-normal dropdown-toggle" data-toggle="dropdown">Date</a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">String</a>
                    <a href="#" class="dropdown-item">Integer</a>
                    <a href="#" class="dropdown-item">Long</a>
                    <a href="#" class="dropdown-item">Date</a>
                    <a href="#" class="dropdown-item">Boolean</a>
                  </div>
                </div>
              </th>
              <th>
                <div class="dropdown dropdown-th">
                  <a href="#" class="text-white font-weight-normal dropdown-toggle" data-toggle="dropdown">Number</a>
                  <div class="dropdown-menu">
                    <a href="#" class="dropdown-item">String</a>
                    <a href="#" class="dropdown-item">Integer</a>
                    <a href="#" class="dropdown-item">Long</a>
                    <a href="#" class="dropdown-item">Date</a>
                    <a href="#" class="dropdown-item">Boolean</a>
                  </div>
                </div>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>Beverages</td>
              <td>Korea</td>
              <td>20/10/2010 at 04:10 AM</td>
              <td>93,291,255.2</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Beverages</td>
              <td>Korea</td>
              <td>20/10/2010 at 04:10 AM</td>
              <td>93,291,255.2</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Beverages</td>
              <td>Korea</td>
              <td>20/10/2010 at 04:10 AM</td>
              <td>93,291,255.2</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Beverages</td>
              <td>Korea</td>
              <td>20/10/2010 at 04:10 AM</td>
              <td>93,291,255.2</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Beverages</td>
              <td>Korea</td>
              <td>20/10/2010 at 04:10 AM</td>
              <td>93,291,255.2</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Beverages</td>
              <td>Korea</td>
              <td>20/10/2010 at 04:10 AM</td>
              <td>93,291,255.2</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Beverages</td>
              <td>Korea</td>
              <td>20/10/2010 at 04:10 AM</td>
              <td>93,291,255.2</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Beverages</td>
              <td>Korea</td>
              <td>20/10/2010 at 04:10 AM</td>
              <td>93,291,255.2</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-12 col-sm-5 col-md-4 col-lg-3">
        <div class="form-group form-group-bi">
          <label>Column Headers</label>
          <div class="custom-control custom-radio">
            <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
            <label class="custom-control-label" for="customRadioInline1">User first row as headers</label>
            <i class="float-right">
              <img src="@/assets/icons/question.svg" alt="" width="16" height="16">
            </i>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
            <label class="custom-control-label" for="customRadioInline2">Generate headers</label>
            <i class="float-right">
              <img src="@/assets/icons/question.svg" alt="" width="16" height="16">
            </i>
          </div>
        </div>
        <div class="form-group form-group-bi">
          <label>Delimiter</label>
          <div class="d-flex align-items-center">
            <div class="dropdown">
              <a href="#" class="btn btn-bi-default w-auto dropdown-toggle" data-toggle="dropdown">,</a>
              <div class="dropdown-menu">
                <a href="#" class="dropdown-item">,</a>
                <a href="#" class="dropdown-item">;</a>
                <a href="#" class="dropdown-item">|</a>
                <a href="#" class="dropdown-item">-</a>
                <a href="#" class="dropdown-item">Other</a>
              </div>
            </div>
            <i class="ml-auto">
              <img src="@/assets/icons/question.svg" alt="" width="16" height="16">
            </i>
          </div>
        </div>
        <div class="form-group form-group-bi">
          <label class="w-100 d-flex align-items-center">
            <span>Metadata</span>
            <i class="ml-auto">
              <img src="@/assets/icons/question.svg" alt="" width="16" height="16">
            </i>
          </label>
          <div class="custom-control custom-radio">
            <input type="radio" id="customRadioInline3" name="customRadioInline2" class="custom-control-input">
            <label class="custom-control-label" for="customRadioInline3">Include batch upload metadata</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" id="customRadioInline4" name="customRadioInline2" class="custom-control-input">
            <label class="custom-control-label" for="customRadioInline4">Don’t include batch upload metadata</label>
          </div>
        </div>
        <div class="form-group form-group-bi">
          <label>File Encoding</label>
          <div class="d-flex">
            <div class="dropdown">
              <a href="#" class="btn btn-bi-default w-auto dropdown-toggle" data-toggle="dropdown">UTF-8</a>
              <div class="dropdown-menu">
                <a href="#" class="dropdown-item">US-ASCII</a>
                <a href="#" class="dropdown-item">UTF-8</a>
                <a href="#" class="dropdown-item">UTF-16</a>
                <a href="#" class="dropdown-item">UTF-32</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex mt-5 align-items-center">
      <span class="text-muted">Previewing 100 of 100 rows</span>
      <div class="ml-auto">
        <button class="btn btn-bi-transparent">Back</button>
        <button class="btn btn-bi-primary">Next</button>
      </div>
    </div>
  </div>
</template>
