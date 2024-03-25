<template>
  <v-row>
    <v-col cols="8" offset="2" md="4" offset-md="4">
      <v-card>
        <v-toolbar dark color="primary">Register</v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field name="name" label="Fullname" type="text" />
            <v-text-field name="email" label="Email" type="email" />
            <v-text-field name="passwrod" label="Password" type="password" />
            <v-text-field
              name="repasswrod"
              label="Re-Password"
              type="password"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
