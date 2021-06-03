<template>
  <div>
    <div>
      <table class="table table-bordered">
        <thead>
        <tr>
          <td>#</td>
          <td>props</td>
          <td>data type</td>
          <td>default value</td>
          <td>description</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>owned</td>
          <td>Array</td>
          <td>[]</td>
          <td>List permission of User</td>
        </tr>
        <tr>
          <td>2</td>
          <td>must</td>
          <td>Array</td>
          <td>[]</td>
          <td>List required permissions</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Boolean</td>
          <td>customRender</td>
          <td>false</td>
          <td>
            <p>Toggle mode custom render or not</p>
            <p>When customRender = <strong>true</strong>, component inside <code>Permit</code> component do not render</p>
            <p>Support slot <code>not-permitted</code>. Render when not permitted</p>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>
      Permissions for showing <strong>button1</strong>:
      <code>{{ button1 }}</code>
    </div>
    <div>
      User-A Permissions:
      <code>{{ userA }}</code>
    </div>
    <div>
      User-B Permissions:
      <code>{{ userB }}</code>
    </div>
    <Card class="mt-5">
      <template slot="header">
        <h6 class="text-uppercase text-success">Permitted</h6>
        <div>
          User-A and <strong>Button-1</strong>
        </div>
      </template>
      <div class="mt-3">
        <Permitted :must="button1" :owned="userA">
          <button class="btn btn-primary">Button 1</button>
        </Permitted>
      </div>
    </Card>
    <Card class="mt-5">
      <template slot="header">
        <h6 class="text-uppercase text-success">Permitted</h6>
        <div>
          User-A and <strong>Button-1</strong>
        </div>
        <strong>with Custom Render props</strong>
      </template>
      <div class="mt-3">
        <!--        slot-scope="{permitted}"-->
        <Permitted :must="button1" :owned="userA" custom-render>
          <template slot-scope="{permitted}">
            <button :disabled="!permitted" class="btn btn-primary">Button 1: {{ permitted }}</button>
          </template>
        </Permitted>
      </div>
    </Card>
    <Card class="mt-5">
      <template slot="header">
        <h6 class="text-uppercase text-danger">Not Permitted</h6>
        <div>
          User-B and <strong>Button-1</strong>
        </div>
        <div>
          <small>Do not render when not permitted</small>
        </div>
      </template>
      <div class="mt-3">
        <Permitted :must="button1" :owned="userB" render>
          <button class="btn btn-primary">Button 1</button>
        </Permitted>
      </div>
    </Card>
    <Card class="mt-5">
      <template slot="header">
        <h6 class="text-uppercase text-danger">Not Permitted</h6>
        <div>
          User-B and <strong>Button-1</strong>
        </div>
        <strong>with not-permitted slot</strong>
      </template>
      <div class="mt-3">
        <Permitted :must="button1" :owned="userB" render>
          <button class="btn btn-primary">Button 1</button>
          <em slot="not-permitted" class="text-danger">Not permitted (this is not-permitted slot)</em>
        </Permitted>
      </div>
    </Card>
    <Card class="mt-5">
      <template slot="header">
        <h6 class="text-uppercase text-danger">Not Permitted</h6>
        <div>
          User-B and <strong>Button-1</strong>
        </div>
        <strong>with Custom Render props</strong>
      </template>
      <div class="mt-3">
        <Permitted :must="button1" :owned="userB" custom-render>
          <template slot-scope="{permitted}">
            <button :disabled="!permitted" class="btn btn-primary">Button 1: {{permitted}}</button>
          </template>
        </Permitted>
      </div>
    </Card>
  </div>
</template>
<script>
import Permitted from './Permitted.vue'

export default {
  name: 'PermittedDemo',
  components: {
    Permitted
  },
  data() {
    return {
      userA: ['user:view:*', 'user:edit:129'],
      userB: ['user:view:129', 'user:edit:129'],
      button1: ['user:view:900']
    }
  }
}
</script>
