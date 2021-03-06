import * as assert from 'assert';
import * as path from 'path';
import * as ttm from 'azure-pipelines-task-lib/mock-test';

import replace from '../renameVariables/replace';

describe('Sample task tests', function() {
  before(function() {});

  after(() => {});

  it('should succeed with a replace inputs', (done: MochaDone) => {
    this.timeout(3000);

    const tp = path.join(__dirname, 'success.js');
    const tr = new ttm.MockTestRunner(tp);

    tr.run();

    console.warn(tr.errorIssues);
    assert.equal(tr.succeeded, true, 'should have succeeded');

    done();
  });

  // it('it should fail if tool returns 1', function(done: MochaDone) {
  //   // Add failure test here
  //   done();
  // });

  it('it should replace all characters', (done: MochaDone) => {
    this.timeout(100);

    const rs = replace('A-B-C-D', [{ from: '-', to: ':' }]);

    assert.equal(rs.includes('-'), false, 'should not contains hyphone (-) characters');
    assert.equal(rs.includes(':'), true, 'should be replaced by (:) characters');

    done();
  });
});
